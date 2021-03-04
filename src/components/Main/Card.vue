<template>
  <div class="card">
    <!-- <img :src="img" :alt="user.name" /> -->
    <img src="@/assets/imgs/users/0.jpg" />
    <div class="card__text">
      <div class="card__title">Валентина, 75 років</div>
      <div class="card__mainText">
        Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тих, що
        дешевші!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //   computed: {
  //     img() {
  //       return `@/assets/imgs/users/${user.id}.jpg`; // поправить
  //     },
  //   },
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
    line-height: 20px;
  }
}
</style>