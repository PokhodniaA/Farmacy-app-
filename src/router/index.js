import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Main from "../views/Main.vue";
import Final from "../views/Final.vue";

import store from '@/store';


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      acces: true
    },
    component: Home
  },
  {
    path: "/main",
    name: "Main",
    component: Main
  },
  {
    path: "/final",
    name: "Final",
    component: Final,
    beforeEnter(to, from, next) {
      const finish = store.getters.getAcceses.gameOver;

      if (finish) {
        next()
      }
    }
  },
  {
    path: "/*",
    name: "NotFound",
    meta: {
      acces: true
    },
    component: Home
  },
];

const router = new VueRouter({
  routes
});

router.beforeEach(({ meta }, from, next) => {
  const gameStart = store.getters.getAcceses.gameStart;
  const acces = meta.acces || false;

  if (!gameStart && !acces) {
    next('/');
    return
  }
  next();
});

export default router;
