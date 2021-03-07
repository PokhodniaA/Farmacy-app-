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
  background: url("../assets/imgs/common/bg.jpg") no-repeat center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  // min-height: 1024px;
  height: 100%;
  // padding: 0 0 100% 0;
  width: 100%;

  &__round {
    position: absolute;
    left: 7.64%;
    // left: 110px;
    top: -30px;
  }
}
</style>
