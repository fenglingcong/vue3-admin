import BasicLayout from '@/layouts/BasicLayout.vue';
import { DesktopOutlined } from '@ant-design/icons-vue';

export const asyncRoutes = [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: BasicLayout,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          icon: DesktopOutlined,
        },
        component: () => import(/* webpackChunkName: "home" */ '@/views/SHome'),
      },
      {
        path: '/home',
        name: 'home1',
        meta: {
          title: '首页',
          icon: DesktopOutlined,
        },
        component: () => import(/* webpackChunkName: "home" */ '@/views/SHome'),
      },
      {
        path: '/home',
        name: 'home2',
        meta: {
          title: '首页',
          icon: DesktopOutlined,
        },
        component: () => import(/* webpackChunkName: "home" */ '@/views/SHome'),
      },
      {
        path: '/home',
        name: 'home3',
        meta: {
          title: '首页',
          icon: DesktopOutlined,
        },
        component: () => import(/* webpackChunkName: "home" */ '@/views/SHome'),
      },
    ],
  },
];

// 基础路由
export const basicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/user/SLogin'),
  },
  {
    path: '/404',
    name: 'exception',
    component: () => import(/* webpackChunkName: "login" */ '@/views/user/SLogin'),
  },
];
