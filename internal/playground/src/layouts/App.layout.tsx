import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './App.layout.module.scss';
import { getClassNames } from '@tool-pack/basic';
import { baseRouter } from '../router';
import { Aside, Header, Layout, Main } from '@pkg/components';

export function AppLayout(): JSX.Element {
  const location = useLocation();

  const onSelectChange = (/* e: BaseSyntheticEvent */) => {
    document.documentElement.classList.toggle('dark');
  };
  return (
    <Layout className={styles['app']} vertical>
      <Header className={styles['header']}>
        playground({location.pathname.replace(/^\//, '')})
        <select name="mode" id="mode-selector" onChange={onSelectChange}>
          <option value="light">light</option>
          <option value="dark">dark</option>
        </select>
      </Header>

      <Layout>
        <Aside className={styles['aside']}>
          <ul>
            {baseRouter.map((item, index) => (
              <li
                key={item.name}
                className={getClassNames({
                  active: item.path === location.pathname,
                })}>
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
