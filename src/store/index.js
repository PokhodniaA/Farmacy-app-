import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    currentCard: 0,
    counters: {
      sad: 0,
      happy: 0,
      heart: 0
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
      state.counters[key]++ // возможно сделать проверку
    },
    retryGame(state) {
      state.currentCard = 0;
      state.counters = {
        sad: 0,
        happy: 0,
        heart: 0
      }
    }
  },
  actions: {},
  getters: {
    getCurrentCard(state) {
      return state.currentCard < state.users.length ? state.currentCard : 0;
    },
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
