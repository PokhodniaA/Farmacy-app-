<template>
  <div class="navButtons">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navButtons {
  position: absolute;
  left: 11%;
  top: 7vh;
  width: 70px + 70px + 38px;
  display: flex;
  justify-content: space-between;
}
</style>