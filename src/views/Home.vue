<template>
  <div class="home">
    <enterRound class="home__round" />
  </div>
</template>

<script>
import enterRound from "@/components/Home/enterRound.vue";
export default {
  components: { enterRound },
};
</script>

<style lang="scss" scoped>
.home {
  background-image: url("../assets/imgs/home/bg.jpg");
  background-size: auto;
  position: relative;
  overflow: hidden;
  min-height: 1024px;
  width: 100%;

  &__round {
    position: absolute;
    left: 110px;
    top: -30px;
  }
}
</style>
