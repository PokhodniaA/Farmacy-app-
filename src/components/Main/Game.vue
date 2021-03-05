<template>
  <div class="game">
    <div class="game__field">
      <Card class="game__card" :user="users[getCurrentCard]" />
    </div>

    <div class="game__actions" @click="nextCard">
      <button class="game__button purple" data-btn="sad">Препарат 1</button>
      <button class="game__button blue" data-btn="happy">Препарат 2</button>
      <button class="game__button yellow" data-btn="heart">Препарат 3</button>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Main/Card.vue";

import routersMixin from "@/mixins/routers.js";

import { mapGetters, mapMutations } from "vuex";

export default {
  data: () => ({}),
  methods: {
    ...mapMutations(["showNextCard", "increaseCounter"]),
    buttonsActions() {
      return {
        sad: () => {
          console.log("sad");
          this.increaseCounter("sad");
        },
        happy: () => {
          console.log("happy");
          this.increaseCounter("happy");
        },
        heart: () => {
          console.log("heart");
          this.increaseCounter("heart");
        },
      };
    },
    nextCard(event) {
      const actions = this.buttonsActions();
      const isLastUser = this.getCurrentCard == this.getUsersLength - 1;
      // Возможно переделать в конструкцию if-else
      try {
        const value = event.target.attributes["data-btn"].nodeValue;

        if (this.getCounters.sum < this.getUsersLength) {
          actions[value]();
        }

        if (!isLastUser) {
          this.showNextCard();
        } else {
          this.showResults();
        } // else выполнить другой метод для перехода к final
      } catch (error) {
        if (error.name !== "TypeError") {
          throw error;
        }
      }
    },
    showResults() {
      if (this.getCurrentCard == this.getUsersLength) {
        this.toFinalPage();
      }
    },
  },
  computed: {
    ...mapGetters(["getUsersLength", "getCounters"]),
    getCurrentCard() {
      return this.getCounters.sum;
    },
  },
  components: {
    Card,
  },
  props: {
    users: Array,
  },
  mixins: [routersMixin],
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