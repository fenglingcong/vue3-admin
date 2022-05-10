import ls from '@/utils/storage';
import { login, getUserInfo } from '@/api';
import { message } from 'ant-design-vue';

export default {
  state() {
    return {
      token: ls.get('token', ''),
      userInfo: null,
      remember: ls.get('remember', false),
    };
  },
  getters: {
    token(state) {
      return state.token;
    },
    userInfo(state) {
      return state.userInfo || {};
    },
    remember(state) {
      return state.remember;
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      ls.set('token', token);
      state.token = token;
    },
    SET_USER_INFO(state, info) {
      state.userInfo = info;
    },
    SET_REMEMBER(state, flag) {
      ls.set('remember', flag);
      state.remember = flag;
    },
  },
  actions: {
    login({ commit }, data) {
      return new Promise((reslove, reject) => {
        if (data.username !== 'admin' || data.password !== '123456') {
          message.error('用户名或密码错误');
          return;
        }
        login(data)
          .then((res) => {
            const { token } = res;
            if (token) {
              commit('SET_TOKEN', token);
              reslove(res);
            } else {
              reject(new Error('获取token失败'));
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    logout({ commit }) {
      commit('SET_TOKEN', '');
    },
    getUserInfo({ commit }) {
      return new Promise((reslove, reject) => {
        getUserInfo()
          .then((res) => {
            if (res) {
              commit('SET_USER_INFO', res);
            } else {
              commit('SET_TOKEN', '');
              reject(new Error('获取账户信息失败'));
            }
          })
          .catch((err) => {
            commit('SET_TOKEN', '');
            reject(err);
          });
      });
    },
  },
};
