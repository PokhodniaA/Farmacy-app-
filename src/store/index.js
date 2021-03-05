import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    counters: {
      sad: 0,
      happy: 0,
      heart: 0,
      sum: 0
    }
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    showNextCard(state) {
      state.currentCard++
    },
    increaseCounter(state, key) {
      state.counters[key]++
      state.counters.sum++ // возможно сделать проверку
    },
    retryGame(state) {
      state.counters = {
        sad: 0,
        happy: 0,
        heart: 0,
        sum: 0
      }
    }
  },
  actions: {},
  getters: {
    getUsers(state) {
      return state.users
    },
    getUsersLength(state) {
      return state.users.length
    },
    getCounters(state) {
      return state.counters;
    }
  },
  modules: {}
});
