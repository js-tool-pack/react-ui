import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './App.layout.module.scss';
import { getClassNames } from '@tool-pack/basic';
import { baseRouter } from '../router';

export function AppLayout(): JSX.Element {
  const location = useLocation();

  const onSelectChange = (/* e: BaseSyntheticEvent */) => {
    document.documentElement.classList.toggle('dark');
  };
  return (
    <div className={styles['_']}>
      <header>
        playground({location.pathname.replace(/^\//, '')})
        <select name="mode" id="mode-selector" onChange={onSelectChange}>
          <option value="light">light</option>
          <option value="dark">dark</option>
        </select>
      </header>
      <aside>
        <ul>
          {baseRouter.map((item) => (
            <li
              key={item.name}
              className={getClassNames({
                active: item.path === location.pathname,
              })}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <main>
        <React.Suspense>
          <Outlet />
        </React.Suspense>
      </main>
    </div>
  );
}
