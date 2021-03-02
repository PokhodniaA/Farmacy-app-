<template>
  <div class="Round">
    <h6 class="Round__upperText">Добро пожаловать в игру</h6>
    <h1 class="Round__mainText">
      Помоги <br />
      Фармацевту
    </h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/var.scss";

.Round {
  width: 860px;
  height: 860px;
  border-radius: 100%;
  background: $main-gradient;

  &__upperText {
    font-size: 35px;
    font-weight: 300;
    line-height: 40.73px;
    letter-spacing: 2%;
    color: $main-text;
  }
}
</style>