<template>
  <div class="home">
    <EnterRound class="home__round" />
  </div>
</template>

<script>
import EnterRound from "@/components/Home/EnterRound.vue";
export default {
  components: { EnterRound },
};
</script>

<style lang="scss" scoped>
.home {
  background: url("../assets/imgs/home/bg.jpg") no-repeat center;
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
