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
  top: 7vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;

  button {
    margin-left: 38px;

    &:first-child {
      margin-left: 50px;
    }
  }
}
</style>