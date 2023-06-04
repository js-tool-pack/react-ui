import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './App.layout.module.scss';
import { getClassNames } from '@tool-pack/basic';

export function AppLayout(): JSX.Element {
  const location = useLocation();

  const menu = [
    {
      name: 'transition',
      url: '/transition',
    },
    {
      name: 'transition-group',
      url: '/transition-group',
    },
    {
      name: 'loading',
      url: '/loading',
    },
  ];

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
          {menu.map((item) => (
            <li
              key={item.name}
              className={getClassNames({
                active: item.url === location.pathname,
              })}>
              <Link to={item.url}>{item.name}</Link>
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
