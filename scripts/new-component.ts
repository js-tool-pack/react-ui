/* eslint-disable perfectionist/sort-objects */
import { pascalCase, kebabCase, camelCase } from '@tool-pack/basic';
import { prompt } from 'enquirer';
import * as Path from 'path';
import Fse from 'fs-extra';
import chalk from 'chalk';
import Fs from 'fs';

type InitRes = [filename: string, content: string];

const rootPath = Path.resolve(__dirname, '../');
const importInsertTarget = '/* {import insert target} */';
const exportInsertTarget = '/* {export insert target} */';

const config = {
  componentsPath: Path.resolve(rootPath, 'packages/components/src'),
  // pascalCase
  componentName: '',
  alias: '',
  // kebabCase
  name: '',
};
async function run() {
  const separator = '-'.repeat(10);
  console.log(chalk.cyan(separator, '添加组件开始', separator));
  try {
    await Actions.getConfig();
    Utils.writeFile(...Actions.initComponent());
    Utils.writeFile(...Actions.initTypes());
    Utils.writeFile(...Actions.initScss());
    Utils.writeFile(...Actions.initDemo());
    Utils.writeFile(...Actions.initIndex());
    Utils.writeFile(...Actions.initDoc());
    Utils.writeFile(...Actions.initTest());
    Actions.appendIndex();
    Actions.initLocale();
    console.log(chalk.cyan('添加组件成功'));
  } catch (e) {
    console.log(chalk.grey('添加组件失败，因为：', (e as Error).message));
  }
}

const Actions = {
  initLocale() {
    addLocaleFiles();
    appendToReactUILocale();
    appendToConfigProvider();

    function addLocaleFiles() {
      const localeType = `${pascalCase(config.name)}Locale`;
      const content = `
import type { ${localeType} } from '../${config.name}.types';

const locale: ${localeType} = {
  attr: '...',
};

export default locale;
      `.trim();
      Utils.writeFile('locale/en-US.ts', content);
      Utils.writeFile('locale/zh-CN.ts', content);
    }
    function appendToReactUILocale() {
      const localeDirPath = Path.resolve(
        __dirname,
        '../packages/react-ui/src/locale',
      );

      insert('en-US');
      insert('zh-CN');

      function insert(type: string) {
        const filePath = Path.resolve(localeDirPath, type + '.ts');
        let content = Fs.readFileSync(filePath, 'utf-8');
        const name = camelCase(config.componentName);
        content = content.replace(
          importInsertTarget,
          `import ${name} from '@pkg/components/${config.name}/locale/${type}';\n${importInsertTarget}`,
        );
        content = content.replace(
          exportInsertTarget,
          `${name},\n  ${exportInsertTarget}`,
        );
        Fs.writeFileSync(filePath, content);
      }
    }
    function appendToConfigProvider() {
      const typesPath = Path.resolve(
        config.componentsPath,
        'config-provider/config-provider.types.ts',
      );
      let content = Fs.readFileSync(typesPath, 'utf-8');
      const localeName = config.componentName + 'Locale';
      content = content.replace(
        importInsertTarget,
        `${localeName},\n  ${importInsertTarget}`,
      );
      content = content.replace(
        exportInsertTarget,
        `${camelCase(
          config.componentName,
        )}: Partial<${localeName}>;\n  ${exportInsertTarget}`,
      );
      Fs.writeFileSync(typesPath, content);
    }
  },
  appendIndex() {
    const tsContent = `export * from './${config.name}';\n`;
    Fse.appendFileSync(Utils.getPkgPath(Utils.getFilename('index')), tsContent);

    const namespaceContent = `$${config.name}: '#{Var.$prefix}${config.name}';\n`;
    Fse.appendFileSync(
      Utils.getPkgPath(Utils.getFilename('namespace')),
      namespaceContent,
    );

    const scssContent = `@import './${config.name}';\n`;
    Fse.appendFileSync(
      Utils.getPkgPath(Utils.getFilename('scss')),
      scssContent,
    );

    appendPlayground();

    function appendPlayground() {
      const routerPath = Path.resolve(
        rootPath,
        'internal/playground/src/router.tsx',
      );
      const routerContent = Fs.readFileSync(routerPath, 'utf-8');

      const insertTarget = importInsertTarget;
      const insertContent = `{
    element: getDemos(import.meta.glob('~/${config.name}/demo/*.tsx')),
    name: '${config.name} ${config.alias}',
    path: '/${config.name}',
  },
  ${insertTarget}`;

      Fse.writeFileSync(
        routerPath,
        routerContent.replace(insertTarget, insertContent),
      );
    }
  },
  initComponent(): InitRes {
    const componentName = config.componentName;
    const filename = Utils.getFilename('component');
    const props = `${componentName}Props`;
    const content = `
import { useLocale } from '~/config-provider/useLocale';
import type { RequiredPart } from '@tool-pack/types';
import type { ${props} } from './${Utils.getFilename('types').replace(
      /\.ts$/,
      '',
    )}';
import { getClassNames } from '@tool-pack/basic';
import { getClasses } from '@pkg/shared';
import EnUS from './locale/en-US';
import React from 'react';

const cls = getClasses('${config.name}', [], []);
const defaultProps = {} satisfies Partial<${props}>;

export const ${componentName}: React.FC<${props}> = React.forwardRef<
  HTMLDivElement,
  ${props}
>((props, ref) => {
  const locale = useLocale('${camelCase(config.componentName)}', EnUS);
  const { attrs = {}, children } = props as RequiredPart<
    ${props},
    keyof typeof defaultProps
  >;
  return (
    <div
      {...attrs}
      className={getClassNames(cls.root, attrs.className)}
      ref={ref}
    >
      {children}
    </div>
  );
});

${componentName}.defaultProps = defaultProps;
${componentName}.displayName = '${componentName}';
  `;

    return [filename, content];
  },
  async getConfig() {
    const { name } = await prompt<{ name: string }>({
      validate(value: string) {
        if (!value) return '组件名不能为空';
        const illegalWord = value.replace(/[a-zA-Z-]/g, '');
        if (illegalWord) {
          return `包含不支持的字符: [${illegalWord.split('').join(',')}]`;
        }
        return true;
      },
      message: '输入新组件名(英文和连字符"-")',
      type: 'input',
      name: 'name',
    });

    config.name = kebabCase(name);
    config.componentName = pascalCase(config.name);

    const { alias } = await prompt<{ alias: string }>({
      message: '输入组件别名(中文)',
      required: true,
      type: 'input',
      name: 'alias',
    });

    config.alias = alias;

    const { confirm } = await prompt<{ confirm: boolean }>({
      message: `确认添加组件(${config.name} ${alias})?`,
      type: 'confirm',
      name: 'confirm',
    });

    if (!confirm) throw new Error('放弃添加组件');
  },
  initDoc(): InitRes {
    const filename = Utils.getFilename('doc');
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

| 属性  | 说明          | 类型                                            | 默认值 | 版本 |
| ----- | ------------- | ----------------------------------------------- | ------ | ---- |
| --    | --            | --                                              | --     | --   |
| attrs | html 标签属性 | Partial\\<React.HTMLAttributes\\<HTMLDivElement>> | --     | --   |

其他说明。

  `;
    return [filename, content];
  },
  initDemo(): InitRes {
    const filename = Utils.getFilename('demo');
    const content = `
/**
 * title: 基础用法
 * description: ${config.componentName} 基础用法。
 */

import { ${config.componentName} } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return <${config.componentName}></${config.componentName}>;
};

export default App;
  `;
    return [filename, content];
  },
  initTest(): InitRes {
    const filename = Utils.getFilename('test');
    const content = `
import { render, fireEvent } from '@testing-library/react';
import { testAttrs } from '~/testAttrs';
import { ${config.componentName} } from '..';

describe('${config.componentName}', () => {
  testAttrs(${config.componentName});
});
`;
    return [filename, content];
  },
  initTypes(): InitRes {
    const props = `${config.componentName}Props`;
    const filename = Utils.getFilename('types');
    const content = `
import { PropsBase } from '@pkg/shared';

export interface ${props} extends PropsBase<HTMLDivElement> {
  name?: string;
}
export interface ${config.componentName}Locale {
}
  `;
    return [filename, content];
  },
  initIndex(): InitRes {
    const filename = Utils.getFilename('index');
    const content = `
export type { ${config.componentName}Locale, ${config.componentName}Props } from './${config.name}.types';
export * from './${config.componentName}';
  `;
    return [filename, content];
  },
  initScss(): InitRes {
    const filename = Utils.getFilename('scss');
    const content = `
@use '../namespace' as Name;

$r: Name.$${config.name};

.#{$r} {}
  `;
    return [filename, content];
  },
};

const Utils = {
  getFilename(
    type:
      | 'component'
      | 'namespace'
      | 'index'
      | 'types'
      | 'scss'
      | 'demo'
      | 'test'
      | 'doc',
  ) {
    const name = config.name;
    return (
      {
        test: `__tests__/${config.componentName}.test.tsx`,
        component: `${config.componentName}.tsx`,
        namespace: 'namespace.scss',
        types: `${name}.types.ts`,
        demo: 'demo/basic.tsx',
        doc: 'index.zh-CN.md',
        scss: 'index.scss',
        index: 'index.ts',
      } as Record<typeof type, string>
    )[type];
  },
  writeFile(filename: string, content: string) {
    const filepath = Utils.getFilepath(filename);
    Fse.createFileSync(filepath);
    Fse.writeFileSync(filepath, content.trim() + '\n', 'utf-8');
  },
  getFilepath(filename: string) {
    return Path.resolve(config.componentsPath, `${config.name}/${filename}`);
  },
  getPkgPath(filename: string) {
    return Path.resolve(config.componentsPath, filename);
  },
};

run();
