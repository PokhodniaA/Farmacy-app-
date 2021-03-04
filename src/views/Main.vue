<template>
  <div class="main">
    <Sidebar class="main__sidebar" />
    <Game class="main__content" />
  </div>
</template>

<script>
import Sidebar from "@/components/Main/Sidebar.vue";
import Game from "@/components/Main/Game.vue";

export default {
  components: { Sidebar, Game },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;

  &__sidebar {
    flex-basis: 32.6%;
  }

  &__content {
    flex-basis: 100% - 32.6%;
  }
}
</style>