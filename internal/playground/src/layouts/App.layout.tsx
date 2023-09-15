import { Header, Layout, Aside, Main } from '@pkg/components';
import { useLocation, Outlet, Link } from 'react-router-dom';
import { getClassNames } from '@tool-pack/basic';
import styles from './App.layout.module.scss';
import { baseRouter } from '../router';
import React from 'react';

export function AppLayout(): JSX.Element {
  const location = useLocation();

  const onSelectChange = (/* e: BaseSyntheticEvent */) => {
    document.documentElement.classList.toggle('dark');
  };
  return (
    <Layout className={styles['app']} vertical>
      <Header className={styles['header']}>
        playground({location.pathname.replace(/^\//, '')})
        <select onChange={onSelectChange} id="mode-selector" name="mode">
          <option value="light">light</option>
          <option value="dark">dark</option>
        </select>
      </Header>

      <Layout>
        <Aside className={styles['aside']}>
          <ul>
            {baseRouter.map((item, index) => (
              <li
                className={getClassNames({
                  active: item.path === location.pathname,
                })}
                key={item.name}
              >
                <Link to={item.path}>
                  {index + 1}. {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </Aside>
        <Main className={styles['main']}>
          <React.Suspense>
            <Outlet />
          </React.Suspense>
        </Main>
      </Layout>
    </Layout>
  );
}
