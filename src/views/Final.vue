<template>
  <div class="final">
    <NavButtons>
      <button class="final__home" @click="toHome">
        <img src="@/assets/imgs/icons/Home_white.png" />
      </button>
    </NavButtons>

    <Result class="final__result" />

    <div class="final__doctor">
      <img src="@/assets/imgs/common/doctor.png" />
    </div>

    <button class="final__retry" @click="toNewGame">Попробовать еще</button>
  </div>
</template>

<script>
import NavButtons from "@/components/Common/NavButtons.vue";
import Result from "@/components/Final/Result.vue";

import navButtonsMixin from "@/mixins/navButtons.js";

export default {
  components: { NavButtons, Result },
  mixins: [navButtonsMixin],
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/var.scss";
@import "@/assets/styles/mixxins.scss";

.final {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  // Buttons

  &__home {
    @include navButton($main-gradient);
  }

  &__retry {
    @include additionButton(24, 16, 18.75%, 60px, 7vw);

    position: absolute;
    bottom: 8.2%;
    left: 9%;
  }

  // Image

  &__doctor {
    position: absolute;
    top: -100px;
    right: -150px;
    border-radius: 100%;
    overflow: hidden;

    box-shadow: 0px 0px 40px #c4c4c4;

    width: 57vmax;
    height: 57vmax;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;

      background: $main-gradient;
      opacity: 0.25;
      z-index: 100;
    }
  }

  // Result

  &__result {
    position: absolute;
    width: 40.3%;
    top: 25.4%;
    left: 9%;

    @media screen and (orientation: portrait) {
      top: 39.4%;
      left: 9%;
    }
  }
}
</style>