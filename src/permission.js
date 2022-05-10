import router from '@/router/index';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { setDocumentTitle } from '@/utils/util';
import ls from '@/utils/storage';
import store from './store';

// NProgress.configure({ showSpinner: false });

const whiteList = ['accountLogin', 'exception'];

router.beforeEach((to, from, next) => {
  NProgress.start();
  const token = ls.get('token');
  if (token) {
    if (to.name === 'accountLogin') {
      NProgress.done();
      next({ name: 'dashboard' });
    } else {
      store.dispatch('getUserInfo');
      next();
    }
  } else if (whiteList.includes(to.name)) {
    next();
  } else {
    next({
      name: 'accountLogin',
    });
    NProgress.done();
  }
});

router.afterEach((to) => {
  NProgress.done();
  if (to.meta) setDocumentTitle(to.meta.title);
});
