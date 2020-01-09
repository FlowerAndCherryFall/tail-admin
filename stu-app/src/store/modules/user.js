import { login, logout, getInfo } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";
import { resetRouter } from "@/router";

const getDefaultState = () => {
  return {
    token: getToken(),
    name: "",
    avatar: "",
    introduction: "",
  };
};

const state = getDefaultState();

const mutations = {
  RESET_STATE: state => {
    Object.assign(state, getDefaultState());
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    // console.log(name)
    state.name = name;
  },
  SET_INTRODUCTION: (state, introduction) => {
    // console.log(introduction)
    state.introduction = introduction;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
};

const actions = {
  // user login
  // 用户登录  上面翻译
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      // 这个是他封装的一个api
      login({ userName: username.trim(), password: password })
        .then(response => {
          // console.log(response)
          const { token } = response;
          commit("SET_TOKEN", token); //在vuex中存储当前的token值
          setToken(token); //把服务器端返回的token存储在cookie中
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token)
        .then(response => {
          const { userName, nickName } = response;

          if (!nickName) {
            reject("Verification failed, please Login again.");
          }

          // const { name, avatar } = data
          commit("SET_NAME", "热心市民金先生");
          commit("SET_INTRODUCTION", "路灯王，对桥宝具");
          commit(
            "SET_AVATAR",
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3943377283,3978748646&fm=11&gp=0.jpg"
          );
          resolve(nickName);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(() => {
          removeToken(); // must remove  token  first
          resetRouter();
          commit("RESET_STATE");
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken(); // must remove  token  first
      commit("RESET_STATE");
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
