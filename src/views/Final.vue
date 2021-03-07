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
  min-height: 1024px;
  position: relative;
  overflow: hidden;

  // Buttons

  &__home {
    @include navButton($main-gradient);
  }

  &__retry {
    @include additionButton(24, 16, 19%, 60px);

    position: absolute;
    bottom: 84px;
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

    max-width: 820px;
    max-height: 820px;

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
    width: 40.3%;
    position: absolute;
    top: 25.4%; //260px
    left: 9%; //130px
  }
}
</style>