import BasicLayout from '@/layouts/BasicLayout.vue';
import { DesktopOutlined } from '@ant-design/icons-vue';
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
          title: '首页',
          icon: DesktopOutlined,
        },
        component: RouteView,
        children: [
          {
            path: '/home',
            name: 'home7',
            meta: {
              title: '二级',
            },
            component: RouteView,
            children: [
              {
                path: '/home',
                name: 'home9',
                meta: {
                  title: '三级',
                },
                component: () => import(/* webpackChunkName: "home" */ '@/views/SHome'),
              },
              {
                path: '/home',
                name: 'home11',
                meta: {
                  title: '四级',
                },
                component: () => import(/* webpackChunkName: "home" */ '@/views/SHome'),
              },
            ],
          },
          {
            path: '/home',
            name: 'home13',
            meta: {
              title: '二1级',
            },
            component: RouteView,
            children: [
              {
                path: '/home',
                name: 'home14',
                meta: {
                  title: '三1级',
                },
                component: () => import(/* webpackChunkName: "home" */ '@/views/SHome'),
              },
              {
                path: '/home',
                name: 'home15',
                meta: {
                  title: '四1级',
                },
                component: () => import(/* webpackChunkName: "home" */ '@/views/SHome'),
              },
            ],
          },
        ],
      },
      {
        path: '/list',
        name: 'list',
        meta: {
          title: '列表',
          icon: DesktopOutlined,
        },
        component: () => import(/* webpackChunkName: "list" */ '@/views/list/TableList'),
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
