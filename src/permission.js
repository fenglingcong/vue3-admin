import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import router from '@/router/index';

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});
