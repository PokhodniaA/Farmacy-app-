<template>
  <div class="game">
    <div class="game__field">
      <Card class="game__card" :user="users[getCurrentCard]" />
    </div>

    <div class="game__actions">
      <button class="game__button purple" @click="nextCard">Препарат 1</button>
      <button class="game__button blue">Препарат 2</button>
      <button class="game__button yellow">Препарат 3</button>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Main/Card.vue";

import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["showNextCard"]),
    nextCard() {
      this.showNextCard();
    },
  },
  computed: mapGetters(["getCurrentCard"]),
  components: {
    Card,
  },
  props: {
    users: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/var.scss";
@import "@/assets/styles/mixxins.scss";

.game {
  position: relative;

  &__field {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100% - 15%;
  }

  &__actions {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 15%; //64px + 90px;

    display: flex;
    justify-content: space-around;
  }

  &__button {
    @include gameButton;
  }
}

.purple {
  background: $purple-gradient;
}

.blue {
  background: $blue-gradient;
}

.yellow {
  background: $yellow-gradient;
}
</style>