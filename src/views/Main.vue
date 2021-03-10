<template>
  <div class="main">
    <Sidebar class="main__sidebar" />
    <Game class="main__content" :users="getUsers" />
  </div>
</template>

<script>
import Sidebar from "@/components/Main/Sidebar.vue";
import Game from "@/components/Main/Game.vue";

import { mapGetters, mapMutations } from "vuex";
import data from "@/assets/users/users.json";

export default {
  methods: {
    ...mapMutations(["setUsers"]),
  },
  computed: mapGetters(["getUsersLength", "getUsers"]),
  components: { Sidebar, Game },
  created() {
    if (!this.getUsersLength) {
      // if we haven't in the state users we get it
      this.users = data;
      this.setUsers(data);
    }
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  height: 100%;

  &__sidebar {
    flex-basis: 32.6%;
  }

  &__content {
    flex-basis: 100% - 32.6%;
  }
}
</style>