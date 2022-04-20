import { createRouter, createWebHashHistory } from 'vue-router';
import { asyncRoutes, basicRoutes } from '@/router/routes/index';

const routes = [
  ...asyncRoutes,
  ...basicRoutes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
