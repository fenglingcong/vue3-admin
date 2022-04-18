import ls from '@/utils/storage';

export default {
  state() {
    return {
      lang: 'zh-CN',
      themeColor: '#1890ff',
    };
  },
  getters: {},
  mutations: {
    SET_LANG(state, lang) {
      state.lang = lang;
      ls.set('lang', lang);
    },
    SET_THEME_COLOR(state, color) {
      state.themeColor = color;
      ls.set('color', color);
    },
  },
  actions: {},
};
