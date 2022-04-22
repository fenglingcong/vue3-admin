import BasicLayout from '@/layouts/BasicLayout.vue';
import {
  DesktopOutlined,
  DashboardOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from '@ant-design/icons-vue';
import RouteView from '@/layouts/RouteView';

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
          title: 'home',
          icon: DesktopOutlined,
        },
        component: () => import(/* webpackChunkName: "home" */ '@/views/SHome'),
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: 'dashboard',
          icon: DashboardOutlined,
        },
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/IndexPage'),
      },
      {
        path: '/list',
        name: 'list',
        meta: {
          title: 'listPage',
          icon: UnorderedListOutlined,
        },
        component: RouteView,
        children: [
          {
            path: '/list/table',
            name: 'listTable',
            meta: {
              title: 'tableList',
            },
            component: () => import(/* webpackChunkName: "list" */ '@/views/list/TableList'),
          },
        ],
      },
      {
        path: '/account',
        name: 'account',
        meta: {
          title: 'account',
          icon: UserOutlined,
        },
        component: () => import(/* webpackChunkName: "account" */ '@/views/account/SettingPage'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    hidden: true,
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
    component: () => import(/* webpackChunkName: "login" */ '@/views/exception/404'),
  },
];
