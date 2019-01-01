import Home from '@/components/Home';
import Kind from '@/components/Kind';
import User from '@/components/User';
import Cart from '@/components/Cart';
import Login from '@/components/Login';
import Register from '@/components/register';
import LIST from '@/components/LIST/index';
const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/kind',
    component: Kind
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/login',
    component:Login
  },
  {
    path: '/register',
    component:Register
  },
  {
    path: '/list/:id',
    component:LIST
  }
];

export default routes;
