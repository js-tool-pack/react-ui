import { prompt } from 'enquirer';
import { kebabCase, pascalCase } from '@tool-pack/basic';
import * as Path from 'path';
import Fs from 'fs';
import Fse from 'fs-extra';
import chalk from 'chalk';

type InitRes = [filename: string, content: string];

const rootPath = Path.resolve(__dirname, '../');

const config = {
  name: '',
  componentName: '',
  alias: '',
  componentsPath: Path.resolve(rootPath, 'packages/components/src'),
};
async function run() {
  const separator = '-'.repeat(10);
  console.log(chalk.cyan(separator, '添加组件开始', separator));
  try {
    await getConfig();
    writeFile(...initComponent());
    writeFile(...initTypes());
    writeFile(...initScss());
    writeFile(...initDemo());
    writeFile(...initIndex());
    writeFile(...initDoc());
    appendIndex();
    console.log(chalk.cyan('添加组件成功'));
  } catch (e) {
    console.log(chalk.grey('添加组件失败，因为：', (e as Error).message));
  }
}

run();

async function getConfig() {
  const { name } = await prompt<{ name: string }>({
    type: 'input',
    name: 'name',
    message: '输入新组件名(英文和连字符"-")',
    validate(value: string) {
      if (!value) return '组件名不能为空';
      const illegalWord = value.replace(/[a-zA-Z-]/g, '');
      if (illegalWord) {
        return `包含不支持的字符: [${illegalWord.split('').join(',')}]`;
      }
      return true;
    },
  });

  config.name = kebabCase(name);
  config.componentName = pascalCase(config.name);

  const { alias } = await prompt<{ alias: string }>({
    type: 'input',
    name: 'alias',
    message: '输入组件别名(中文)',
    required: true,
  });

  config.alias = alias;

  const { confirm } = await prompt<{ confirm: boolean }>({
    type: 'confirm',
    name: 'confirm',
    message: `确认添加组件(${config.name} ${alias})?`,
  });

  if (!confirm) throw new Error('放弃添加组件');
}

function initComponent(): InitRes {
  const componentName = config.componentName;
  const filename = getFilename('component');
  const props = `${componentName}Props`;
  const content = `
import React from 'react';
import type { ${props} } from './${getFilename('types').replace(/\.ts$/, '')}';
import { getClasses } from '@pkg/shared';
import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';

const cls = getClasses('${config.name}', [], []);
const defaultProps = {} satisfies Partial<${props}>;

export const ${componentName}: React.FC<${props}> = (props) => {
  const { attrs, children } = props as RequiredPart<
    ${props},
    keyof typeof defaultProps
  >;
  return (
    <div {...attrs} className={getClassNames(cls.root, attrs?.className)}>
      {children}
    </div>
  );
};

${componentName}.defaultProps = defaultProps;
${componentName}.displayName = '${componentName}';
  `;

  return [filename, content];
}
function initTypes(): InitRes {
  const props = `${config.componentName}Props`;
  const filename = getFilename('types');
  const content = `
import { PropsBase } from '@pkg/shared';

export interface ${props} extends PropsBase {
  name?: string;
}
  `;
  return [filename, content];
}

function initScss(): InitRes {
  const filename = getFilename('scss');
  const content = `
@use '../namespace' as Name;

$r: Name.$${config.name};

.#{$r} {}
  `;
  return [filename, content];
}

function initDemo(): InitRes {
  const filename = getFilename('demo');
  const content = `
/**
 * title: 基础用法
 * description: ${config.componentName} 基础用法。
 */

import React from 'react';
import { ${config.componentName} } from '@tool-pack/react-ui';

const App: React.FC = () => {
  return <${config.componentName}></${config.componentName}>;
};

export default App;
  `;
  return [filename, content];
}

function initIndex(): InitRes {
  const filename = getFilename('index');
  const content = `
export type { ${config.componentName}Props } from './${config.name}.types';
export * from './${config.componentName}';
  `;
  return [filename, content];
}

function initDoc(): InitRes {
  const filename = getFilename('doc');
  const content = `
---
category: Components
title: ${config.componentName} ${config.alias}
atomId: ${config.componentName}
demo:
  cols: 2
group:
  title: 通用
---

${config.componentName} ${config.alias}。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>

## API

${config.componentName} 的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| ---- | ---- | ---- | ------ | ---- |
|  --  |  --  |  --  |   --   |  --  |

其他说明。

  `;
  return [filename, content];
}
function appendIndex() {
  const tsContent = `export * from './${config.name}';\n`;
  Fse.appendFileSync(getPkgPath(getFilename('index')), tsContent);

  const namespaceContent = `$${config.name}: '#{Var.$prefix}${config.name}';\n`;
  Fse.appendFileSync(getPkgPath(getFilename('namespace')), namespaceContent);

  const scssContent = `@import './${config.name}';\n`;
  Fse.appendFileSync(getPkgPath(getFilename('scss')), scssContent);

  appendPlayground();
}

function appendPlayground() {
  const routerPath = Path.resolve(
    rootPath,
    'internal/playground/src/router.tsx',
  );
  const routerContent = Fs.readFileSync(routerPath, 'utf-8');

  const insertTarget = '/*insert target*/';
  const insertContent = `{
    name: '${config.name} ${config.alias}',
    path: '/${config.name}',
    element: getDemos(import.meta.glob('~/${config.name}/demo/*.tsx')),
  },
  ${insertTarget}`;

  Fse.writeFileSync(
    routerPath,
    routerContent.replace(insertTarget, insertContent),
  );
}

function getFilename(
  type: 'doc' | 'scss' | 'index' | 'component' | 'types' | 'demo' | 'namespace',
) {
  const name = config.name;
  return (
    {
      doc: 'index.zh-CN.md',
      scss: 'index.scss',
      namespace: 'namespace.scss',
      component: `${config.componentName}.tsx`,
      index: 'index.ts',
      types: `${name}.types.ts`,
      demo: 'demo/basic.tsx',
    } as Record<typeof type, string>
  )[type];
}

function getFilepath(filename: string) {
  return Path.resolve(config.componentsPath, `${config.name}/${filename}`);
}
function getPkgPath(filename: string) {
  return Path.resolve(config.componentsPath, filename);
}

function writeFile(filename: string, content: string) {
  const filepath = getFilepath(filename);
  Fse.createFileSync(filepath);
  Fse.writeFileSync(filepath, content.trim() + '\n', 'utf-8');
}
