import { createStore } from 'vuex';
import app from './modules/app';
import account from './modules/account';
import count from './modules/count';

export default createStore({
  modules: {
    app,
    account,
    count,
  },
});
