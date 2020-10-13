import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import homPage from '@/pages/home/home';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/',
        name: '首页',
        component: homPage,
      },
      {
        path: 'location',
        name: '选择收货地址',
        component: () => import('@/pages/home/location'),
      },
      {
        path: 'search',
        name: '搜索',
        component: () => import('@/pages/home/search'),
      },
      {
        path: 'recommend',
        name: '推荐',
        component: () => import('@/pages/home/recommend'),
      },
    ],
  },
  {
    path: '/discover',
    name: '探索',
    component: () => import('@/views/Discover'),
  },
  {
    path: '/order',
    name: '订单',
    component: () => import('@/views/Order'),
  },
  {
    path: '/user',
    component: () => import('@/views/User'),
    children: [
      {
        path: '/',
        name: '个人信息',
        component: () => import('@/pages/user/user'),
      },
      {
        path: 'service',
        name: '服务条款',
        component: () => import('@/pages/user/service'),
      },
      {
        path: 'login',
        name: '登录/注册',
        component: () => import('@/pages/user/login'),
      },
      {
        path: 'profile',
        name: '账户信息',
        component: () => import('@/pages/user/profile'),
      },
    ],
  },
  {
    path: '/detail',
    component: () => import('@/views/Detail'),
    children: [
      {
        path: '',
        component: () => import('@/pages/detail/detail'),
      },
      {
        path: 'check',
        name: '确认订单',
        component: () => import('@/pages/detail/check'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'linkActiveClass',
});

export default router;
