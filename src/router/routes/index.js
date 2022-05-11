import BasicLayout from '@/layouts/BasicLayout.vue';
import AccountLayout from '@/layouts/AccountLayout.vue';
import {
  FormOutlined,
  DashboardOutlined,
  UnorderedListOutlined,
  ProfileOutlined,
  UserOutlined,
} from '@ant-design/icons-vue';
import RouteView from '@/layouts/RouteView';

export const asyncRoutes = [
  {
    path: '/',
    name: 'index',
    redirect: '/dashboard',
    component: BasicLayout,
    children: [
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
        path: '/form',
        name: 'form',
        meta: {
          title: 'formPage',
          icon: FormOutlined,
        },
        redirect: '/form/basic',
        component: RouteView,
        children: [
          {
            path: '/form/basic',
            name: 'formBasic',
            meta: {
              title: 'formBasic',
            },
            redirect: '/form/basic/child',
            component: RouteView,
            children: [
              {
                path: '/form/basic/child',
                name: 'formBasicChild',
                meta: {
                  title: 'formBasicChild',
                },
                component: () => import(/* webpackChunkName: "formBasic" */ '@/views/form/FormBasic'),
              },
            ],
          },
          {
            path: '/form/step',
            name: 'formStep',
            meta: {
              title: 'formStep',
            },
            component: () => import(/* webpackChunkName: "formStep" */ '@/views/form/FormStep'),
          },
          {
            path: '/form/advanced',
            name: 'formAdvanced',
            meta: {
              title: 'formAdvanced',
            },
            component: () => import(/* webpackChunkName: "formAdvanced" */ '@/views/form/FormAdvanced'),
          },
        ],
      },
      {
        path: '/list',
        name: 'list',
        meta: {
          title: 'listPage',
          icon: UnorderedListOutlined,
        },
        redirect: '/list/table',
        component: RouteView,
        children: [
          {
            path: '/list/table',
            name: 'listTable',
            meta: {
              title: 'tableList',
            },
            component: () => import(/* webpackChunkName: "listTable" */ '@/views/list/TableList'),
          },
        ],
      },
      {
        path: '/detail',
        name: 'detail',
        meta: {
          title: 'detailPage',
          icon: ProfileOutlined,
        },
        redirect: '/detail/basic',
        component: RouteView,
        children: [
          {
            path: '/detail/basic',
            name: 'detailBasic',
            meta: {
              title: 'detailBasic',
            },
            component: () => import(/* webpackChunkName: "detailBasic" */ '@/views/detail/DetailBasic'),
          },
          {
            path: '/detail/advanced',
            name: 'detailAdvanced',
            meta: {
              title: 'detailAdvanced',
            },
            component: () => import(/* webpackChunkName: "detailAdvanced" */ '@/views/detail/DetailAdvanced'),
          },
        ],
      },
      {
        path: '/user',
        name: 'user',
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
    path: '/account',
    name: 'account',
    component: AccountLayout,
    children: [
      {
        path: '/account/login',
        name: 'accountLogin',
        component: () => import(/* webpackChunkName: "login" */ '@/views/user/SLogin'),
      },
    ],
  },
  {
    path: '/404',
    name: 'exception',
    component: () => import(/* webpackChunkName: "404" */ '@/views/exception/404'),
  },
];
