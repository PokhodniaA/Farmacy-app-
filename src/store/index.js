import Vue from "vue";
import Vuex from "vuex";

import game from './modules/game'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
  },
  actions: {},
  getters: {
    getUsers(state) {
      return state.users
    },
    getUsersLength(state) {
      return state.users.length
    },
  },
  modules: { game }
});
