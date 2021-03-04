import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    currentCard: 0,
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    showNextCard(state) {
      state.currentCard++
    }
  },
  actions: {},
  getters: {
    getCurrentCard(state) {
      return state.currentCard < state.users.length ? state.currentCard : 0; // вместо 0 потом что-то вызвать
    },
    getUsers(state) {
      return state.users
    },
    getUsersLength(state) {
      return state.users.length
    }
  },
  modules: {}
});
