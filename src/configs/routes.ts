import { Accessories } from '../pages/Accessories';
import { Bicycles } from '../pages/Bicycles';
import { Gyroboards } from '../pages/Gyroboards';
import { Home } from '../pages/Home';
import { Monowheels } from '../pages/Monowheels';
import { Scooters } from '../pages/Scooters';
import { Skateboards } from '../pages/Skateboards';

export const routes = [
  {
    path: '/',
    element: Home,
    exact: true,
  },
  {
    path: '/bicycles',
    element: Bicycles,
    exact: true,
  },
  {
    path: '/skateboards',
    element: Skateboards,
    exact: true,
  },
  {
    path: '/scooters',
    element: Scooters,
    exact: true,
  },
  {
    path: '/gyroboards',
    element: Gyroboards,
    exact: true,
  },
  {
    path: '/monowheels',
    element: Monowheels,
    exact: true,
  },
  {
    path: '/accessories',
    element: Accessories,
    exact: true,
  },
];
