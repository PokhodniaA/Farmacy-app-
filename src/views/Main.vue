<template>
  <div class="main">
    <Sidebar class="main__sidebar" />
    <div class="main__content">sdsfd</div>
  </div>
</template>

<script>
import Sidebar from "@/components/Main/Sidebar.vue";

export default {
  components: { Sidebar },
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