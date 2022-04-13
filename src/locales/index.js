import { createI18n } from 'vue-i18n/index';
import zh from './zh-CN';
import en from './en-US';

const { userLanguage, language } = navigator;
const lang = userLanguage || language;
console.log(lang);

const i18n = createI18n({
  fallbackLocale: 'zh-CN',
  locale: 'zh-CN',
  messages: {
    'zh-CN': zh,
    'en-US': en,
  },
});

export default i18n;
