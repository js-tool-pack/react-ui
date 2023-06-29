import { Footer } from '@mxssfd/dumi-theme-antd-style';
import pkg from '../../../../package.json';
export default () => {
  return (
    <Footer
      bottom={
        <div>
          Open-source MIT Licensed | Copyright ©{new Date().getFullYear()}
          <br />
          <a href={pkg.homepage}> {pkg.name.replace('-monorepo', '')} </a>
        </div>
      }
      columns={[]}
    />
  );
};
