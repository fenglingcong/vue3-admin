import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import router from '@/router/index';
import { setDocumentTitle } from '@/utils/util';

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach((to) => {
  NProgress.done();
  if (to.meta) setDocumentTitle(to.meta.title);
});
