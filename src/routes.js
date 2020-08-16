import React from 'react';

const Login = React.lazy(() => import('./components/Login'));
const Register = React.lazy(() => import('./components/Register'));
const Home = React.lazy(() => import('./components/Home'));
const Cart = React.lazy(() => import('./components/Cart'));
const Orders = React.lazy(() => import('./components/Orders'));
const Products = React.lazy(() =>
  import('./sharedComponents/Products/Products')
);

const routes = [
  {
    path: '/login',
    exact: true,
    name: 'Login',
    component: Login,
  },
  {
    path: '/Register',
    exact: true,
    name: 'Register',
    component: Register,
  },
  {
    path: '/Home',
    exact: true,
    name: 'Home',
    component: Home,
  },
  {
    path: '/Cart',
    exact: true,
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/Orders',
    exact: true,
    name: 'Orders',
    component: Orders,
  },
  {
    path: '/categories/:categoryId',
    exact: true,
    name: 'Products',
    component: Products,
  },
];

export default routes;
