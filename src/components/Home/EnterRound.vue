<template>
  <div class="Round">
    <h6 class="Round__upperText">Добро пожаловать в игру</h6>
    <h1 class="Round__mainText">
      Помоги <br />
      <span>Фармацевту</span>
    </h1>

    <button class="Round__button" @click="letsStart">Начать</button>
  </div>
</template>

<script>
import routersMixin from "@/mixins/routers.js";
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["startGame"]),
    letsStart() {
      this.startGame(); // give access to start game
      this.toMainPage();
    },
  },
  mixins: [routersMixin],
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/var.scss";
@import "@/assets/styles/mixxins.scss";

.Round {
  position: relative;
  width: 60vmax;
  height: 60vmax;
  border-radius: 100%;

  background: $main-gradient;

  &__upperText {
    @include adaptiv-font(35, 20);

    font-weight: 300;
    line-height: 40.73px;
    color: $main-text;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    position: absolute;
    left: 22%;
    top: 32.6%;

    margin: 0;
  }

  &__mainText {
    @include adaptiv-font(60, 30);

    font-weight: 700;
    line-height: 40px;
    color: $main-text;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    -webkit-text-stroke: 1px #000;

    position: absolute;
    left: 21%;
    top: 41%;

    margin: 0;

    @media screen and (min-width: 1024px) {
      line-height: 66px;
    }

    span {
      @include adaptiv-font(70, 40);

      text-transform: uppercase;
    }
  }

  &__button {
    @include mainButton;

    position: absolute;
    left: 28%;
    bottom: 19%;
  }
}
</style>