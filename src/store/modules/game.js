export default {
  state: {
    counters: {
      sad: 0,
      happy: 0,
      heart: 0,
      sum: 0
    },
    acces: {
      gameStart: false,
      gameOver: false,
    }
  },
  mutations: {
    increaseCounter(state, key) {
      state.counters[key]++
      state.counters.sum++
    },
    retryGame(state) {
      state.counters = {
        sad: 0,
        happy: 0,
        heart: 0,
        sum: 0
      }
      state.acces.gameOver = false;
    },
    startGame(state) {
      state.acces.gameStart = true;
    },
    exitGame(state) {
      state.counters = {
        sad: 0,
        happy: 0,
        heart: 0,
        sum: 0
      }
      state.acces.gameStart = false;
      state.acces.gameOver = false;

    },
    gameOver(state) {
      state.acces.gameOver = true;
    }
  },
  getters: {
    getAcceses(state) {
      return state.acces
    },
    getCounters(state) {
      return state.counters;
    }
  },
}