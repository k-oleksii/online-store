import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { navigation } from '../../configs/navigation';

export const Layout: FC = () => {
  return (
    <div className="app">
      Header
      <nav className="my-10">
        <ul className="flex justify-center gap-3">
          {navigation.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <main className="mb-20">
        <Outlet />
      </main>
      Footer
    </div>
  );
};
