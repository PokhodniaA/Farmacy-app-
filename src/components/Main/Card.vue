<template>
  <div class="card">
    <img :src="imagePath" :alt="user.name" />
    <div class="card__text">
      <div class="card__title">{{ getUserName }}, {{ getUserYear }}</div>
      <div class="card__mainText">
        {{ user.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    declension(number, txt) {
      var cases = [2, 0, 1, 1, 1, 2];
      return txt[
        number % 100 > 4 && number % 100 < 20
          ? 2
          : cases[number % 10 < 5 ? number % 10 : 5]
      ];
    },
  },
  computed: {
    imagePath() {
      const user = this.user.id;
      return require(`@/assets/imgs/users/${user}.png`);
    },
    getUserName() {
      return this.user.name.slice(0, 1).toUpperCase() + this.user.name.slice(1);
    },
    getUserYear() {
      return `${this.user.age} ${this.declension(this.user.age, [
        "рік",
        "роки",
        "років",
      ])}`;
    },
  },
  props: {
    user: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/var.scss";
@import "@/assets/styles/mixxins.scss";

.card {
  max-width: 540px;
  max-height: 590px;
  border-radius: 40px;
  overflow: hidden;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media screen and (max-width: 1024px) {
    max-width: 500px;
  }

  &__text {
    width: 78%;
    margin-top: 25px;
    margin-bottom: 85px;
  }

  &__title {
    color: $purple-text;

    font-size: 32px;
    font-weight: 700;
    line-height: 39px;
  }

  &__mainText {
    margin-top: 17px;
    color: $dark-text;
    font-size: 24px;
    line-height: 25px;
  }
}
</style>