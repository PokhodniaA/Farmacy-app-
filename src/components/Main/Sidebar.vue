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
  height: 100%;
  position: relative;

  background: $main-gradient;

  // Nav buttons

  &__btn {
    @include navButton;
  }

  // Counters

  &__counters {
    position: absolute;
    right: 0px;
    left: 0px;
    top: 42%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: 1224px) {
      top: 22%;
      align-items: center;
    }
  }

  &__title {
    @include adaptiv-font(36, 27);
    margin-bottom: 33px;
    margin-left: 8.5%;
    font-weight: bold;

    color: #fff;
    line-height: 44px;

    @media screen and (max-width: 1224px) {
      margin-left: 0;
    }
  }

  &__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width: 1224px) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__card {
    width: 190px;
    height: 80px;
    padding: 10px;

    background-color: #fff;
    border-radius: 40px;
    box-shadow: 0px 0px 50px rgba(131, 42, 64, 0.4);
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 40px;

    &:first-child {
      margin-right: 20px;

      @media screen and (max-width: 1224px) {
        margin-right: 0;
      }
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
    margin-right: 50px - 10px;

    color: #424242;
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
  }

  // Footer

  &__footer {
    @include adaptiv-font(36, 24);

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    min-height: 134px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: rgba(255, 255, 255, 0.15);
    color: #fff;
    font-weight: 300;
    line-height: 44px;
    letter-spacing: 0.02em;
    text-align: center;
  }
}
</style>