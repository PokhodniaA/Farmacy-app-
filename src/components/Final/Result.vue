<template>
  <div class="result">
    <div class="result__cards">
      <div class="result__card">
        <div class="result__result">{{ getSad }}%</div>
        <div class="result__medications">Препарат 1</div>
      </div>

      <div class="result__card">
        <div class="result__result">{{ getHappy }}%</div>
        <div class="result__medications">Препарат 2</div>
      </div>

      <div class="result__card">
        <div class="result__result">{{ getHeart }}%</div>
        <div class="result__medications">Препарат 3</div>
      </div>
    </div>

    <div class="result__title">
      Ваш результат:<br /><span>«Что я здесь делаю?»</span>
    </div>
    <div class="result__subTitle">
      Это тестовое задание, так что не будем углубляться в глубины проблем
      фармацевтов.
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({ res: {} }),
  methods: {
    computeSales(sales, summary) {
      return Math.round((sales * 100) / summary) || 0;
    },
  },
  computed: {
    ...mapGetters(["getCounters"]),
    getSad() {
      const sales = this.res.sad;
      const summary = this.res.sum;
      return this.computeSales(sales, summary);
    },
    getHappy() {
      const sales = this.res.happy;
      const summary = this.res.sum;
      return this.computeSales(sales, summary);
    },
    getHeart() {
      const sales = this.res.heart;
      const summary = this.res.sum;
      return this.computeSales(sales, summary);
    },
  },
  created() {
    this.res = this.getCounters;
    console.log(this.res, "res");
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/var.scss";
@import "@/assets/styles/mixxins.scss";

.result {
  &__cards {
    display: flex;
    width: 100%;
    justify-content: space-around;

    padding-bottom: 50px;

    color: $dark-text;
    text-align: center;

    border-bottom: 2px solid $divider;
  }

  &__result {
    @include adaptiv-font(48, 24);
    line-height: 70px;
  }

  &__medications {
    @include adaptiv-font(16, 9);
    line-height: 20px;
    font-weight: 700;
  }

  &__title {
    @include adaptiv-font(32, 24);

    color: $purple-text;
    line-height: 44px;
    font-weight: bold;

    margin-top: 40px;

    span {
      @include adaptiv-font(40, 36);
    }
  }

  &__subTitle {
    @include adaptiv-font(24, 16);

    color: $dark-text;
    line-height: 29px;

    margin-top: 20px;
  }
}
</style>