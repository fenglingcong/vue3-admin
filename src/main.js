import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'ant-design-vue/dist/antd.variable.min.css';
import '@/style/app.less';

import './mock/test';
import '@/permission';
import i18n from './locales';

createApp(App)
  .use(Antd)
  .use(i18n)
  .use(store)
  .use(router)
  .mount('#app');
