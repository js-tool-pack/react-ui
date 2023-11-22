import type { Project } from '@stackblitz/sdk';

// 参考文档：https://d.umijs.org/config/runtime#modifystackblitzdata
export function modifyStackBlitzData(memo: Project /*, props*/): Project {
  memo.files[filename] = joinImportCss(memo.files[filename]);
  return memo;
}

export function modifyCodeSandboxData(memo: {
  files: Record<string, { content: string }>;
}): typeof memo {
  memo.files[filename].content = joinImportCss(memo.files[filename].content);
  return memo;
}

const filename = 'App.tsx';
/**
 * 拼接 css 导入
 */
function joinImportCss(content: string): string {
  return 'import "@tool-pack/react-ui/dist/index.css";\n' + content;
}
