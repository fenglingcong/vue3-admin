import ls from '@/utils/storage';

export default {
  state() {
    return {
      lang: ls.get('lang', 'zh-CN'),
      themeColor: ls.get('color', '#1890ff'),
    };
  },
  getters: {
    lang(state) {
      return state.lang;
    },
    themeColor(state) {
      return state.themeColor;
    },
  },
  mutations: {
    SET_LANG(state, lang) {
      state.lang = lang;
      ls.set('lang', lang);
      document.querySelector('html').setAttribute('lang', lang);
    },
    SET_THEME_COLOR(state, color) {
      state.themeColor = color;
      ls.set('color', color);
    },
  },
  actions: {},
};
