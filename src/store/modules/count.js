export default {
  state() {
    return {
      count: 0,
    };
  },
  getters: {},
  mutations: {
    add(state) {
      state.count += 1;
    },
  },
  actions: {},
};
