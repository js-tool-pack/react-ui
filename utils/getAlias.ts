import Path from 'path';
import Fs from 'fs';

export function getAlias(): Record<string, string> {
  const pkgsPath = Path.resolve(__dirname, '../packages');
  const componentsSrcPath = Path.resolve(pkgsPath, 'components/src');

  const pkgs = Fs.readdirSync(pkgsPath);
  const componentsSrcDirs = Fs.readdirSync(componentsSrcPath);

  return {
    '@tool-pack/react-ui': Path.resolve(pkgsPath, 'react-ui/src'),
    ...pkgs.reduce(
      (prev, cur) => {
        prev['@pkg/' + cur] = Path.resolve(pkgsPath, `${cur}/src`);
        return prev;
      },
      {} as Record<string, string>,
    ),
    ...componentsSrcDirs.reduce(
      (prev, cur) => {
        prev['~/' + cur] = Path.resolve(componentsSrcPath, cur);
        return prev;
      },
      {} as Record<string, string>,
    ),
  };
}
