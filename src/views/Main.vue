<template>
  <div class="main">
    <Sidebar class="main__sidebar" />
    <Game class="main__content" :users="users" />
  </div>
</template>

<script>
import Sidebar from "@/components/Main/Sidebar.vue";
import Game from "@/components/Main/Game.vue";

import { mapGetters, mapMutations } from "vuex";
import data from "@/assets/users/users.json";

export default {
  data: () => ({ users: [] }),
  methods: {
    ...mapMutations(["setUsers"]),
  },
  computed: mapGetters(["getUsersLength", "getUsers"]),
  components: { Sidebar, Game },
  created() {
    this.users = this.getUsersLength ? this.getUsers : data;

    if (this.getUsersLength) {
      this.users = this.getUsers;
    } else {
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