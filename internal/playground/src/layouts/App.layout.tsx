import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './App.layout.module.scss';

export function AppLayout(): JSX.Element {
  const menu = [
    {
      name: 'transition',
      url: '/transition',
    },
    {
      name: 'transition-group',
      url: '/transition-group',
    },
  ];
  return (
    <div className={styles['_']}>
      <header>playground</header>
      <aside>
        <ul>
          {menu.map((item) => (
            <li>
              <a href={item.url}>{item.name}</a>
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
