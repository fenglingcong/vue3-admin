import { createRouter, createWebHashHistory } from 'vue-router';
import { asyncRoutes, basicRoutes } from '@/config/routes/index';

const routes = [
  ...asyncRoutes,
  ...basicRoutes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
