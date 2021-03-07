<template>
  <div class="sidebar">
    <NavButtons>
      <button class="sidebar__btn" @click="toHome">
        <img src="@/assets/imgs/icons/Home.png" />
      </button>

      <button class="sidebar__btn" @click="retryGame">
        <img src="@/assets/imgs/icons/Retry.png" />
      </button>
    </NavButtons>

    <div class="sidebar__counters">
      <div class="sidebar__title">Параметри:</div>
      <div class="sidebar__cards">
        <div class="sidebar__card">
          <img src="@/assets/imgs/icons/Sad_smile.png" />
          <div class="sidebar__cardCounter">{{ getCounters.sad }}</div>
        </div>

        <div class="sidebar__card">
          <img src="@/assets/imgs/icons/Happy_smile.png" />
          <div class="sidebar__cardCounter">{{ getCounters.happy }}</div>
        </div>

        <div class="sidebar__card">
          <img src="@/assets/imgs/icons/Heart_icon.png" />
          <div class="sidebar__cardCounter">{{ getCounters.heart }}</div>
        </div>
      </div>
    </div>

    <footer class="sidebar__footer">
      <div class="sidebar__footerText">Осталось в очереди:</div>
      <div class="sidebar__counter">
        <b>{{ getUsersLength - getCounters.sum }}</b
        >/{{ getUsersLength }}
      </div>
    </footer>
  </div>
</template>

<script>
import NavButtons from "@/components/Common/NavButtons.vue";

import { mapGetters } from "vuex";
import navButtonsMixin from "@/mixins/navButtons.js";

export default {
  components: { NavButtons },

  computed: mapGetters(["getUsersLength", "getCounters"]),
  mixins: [navButtonsMixin],
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/var.scss";
@import "@/assets/styles/mixxins.scss";

.sidebar {
  background: $main-gradient;
  height: 100vh;
  position: relative;

  // Nav buttons

  &__btn {
    @include navButton;
  }

  // Counters

  &__counters {
    position: absolute;
    right: 0px;
    left: 0px;
    top: 42vh;
    display: flex;
    flex-direction: column;
    align-items: bottom;
  }

  &__title {
    @include adaptiv-font(36, 27);
    color: #fff;
    margin-bottom: 33px;
    margin-left: 8.5%;
    font-weight: bold;
    line-height: 44px;
  }

  &__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__card {
    width: 190px;
    height: 80px;
    background-color: #fff;
    border-radius: 40px;
    box-shadow: 0px 0px 50px rgba(131, 42, 64, 0.4);
    position: relative;
    padding: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 40px;

    &:first-child {
      margin-right: 20px;
    }

    &:last-child {
      padding: 17px 10px 15px 14px;
      margin-bottom: 0;

      img {
        width: 56px;
        height: 48px;
      }
    }
  }

  &__cardCounter {
    color: #424242;
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
    margin-right: 50px - 10px;
  }

  // Footer

  &__footer {
    @include adaptiv-font(36, 24);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    min-height: 134px;
    background: rgba(255, 255, 255, 0.15);

    color: #fff;
    font-weight: 300;
    line-height: 44px;
    letter-spacing: 0.02em;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>