import { Link, Route, Routes } from 'react-router-dom';
import logo from './assets/logo.svg';
import { Layout } from './components/Layout';
import { routes } from './configs/routes';

export const App = () => {
  return (
    <div className="flex flex-col items-center gap-5 py-10 text-center">
      <Link to="/online-store/">
        <img src={logo} className="logo react" alt="React logo" />
      </Link>
      <h1>Welcome to the online store CityWheel!</h1>
      <Routes>
        <Route path="/online-store/" element={<Layout />}>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))}
        </Route>
      </Routes>
    </div>
  );
};
