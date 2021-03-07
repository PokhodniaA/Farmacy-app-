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
      this.startGame();
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
  width: 60vw;
  height: 60vw;
  border-radius: 100%;
  background: $main-gradient;
  position: relative;

  &__upperText {
    @include adaptiv-font(35, 15);
    font-weight: 300;
    line-height: 40.73px;
    color: $main-text;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); //1

    position: absolute;
    left: 22%;
    top: 32.6%;

    margin: 0;
  }

  &__mainText {
    @include adaptiv-font(60, 30);
    font-weight: 700;
    line-height: 66.15px;
    color: $main-text;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); //1
    -webkit-text-stroke: 1px #000;

    position: absolute;
    left: 21%;
    top: 41%;

    margin: 0;

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