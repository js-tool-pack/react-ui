import type { Project } from '@stackblitz/sdk';

// 参考文档：https://d.umijs.org/config/runtime#modifystackblitzdata
export function modifyStackBlitzData(
  memo: Project,
  props: { filename: string },
): Project {
  memo.files[filename] = joinImportCss(memo.files[filename], props.filename);
  return memo;
}

export function modifyCodeSandboxData(
  memo: {
    files: Record<string, { content: string }>;
  },
  props: { filename: string },
): typeof memo {
  memo.files[filename].content = joinImportCss(
    memo.files[filename].content,
    props.filename,
  );
  return memo;
}

const filename = 'App.tsx';
const ignores = ['docs/guide/css-tree-shaking.tsx'];
/**
 * 拼接 css 导入
 */
function joinImportCss(content: string, filename: string): string {
  if (ignores.includes(filename)) return content;
  return 'import "@tool-pack/react-ui/dist/index.css";\n' + content;
}
