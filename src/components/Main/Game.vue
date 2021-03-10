<template>
  <div class="game">
    <div class="game__field">
      <transition
        name="card"
        leave-active-class="animateButton"
        @after-leave="afterLeave"
        appear
      >
        <Card
          class="game__card"
          :class="animateButton"
          v-if="showCard"
          :user="users[getCurrentCard]"
        />
      </transition>
    </div>

    <div class="game__actions" @click="moveCard">
      <button
        class="game__button purple"
        data-btn="sad"
        :disabled="isButtonDisabled"
      >
        Препарат 1
      </button>
      <button
        class="game__button blue"
        data-btn="happy"
        :disabled="isButtonDisabled"
      >
        Препарат 2
      </button>
      <button
        class="game__button yellow"
        data-btn="heart"
        :disabled="isButtonDisabled"
      >
        Препарат 3
      </button>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Main/Card.vue";

import routersMixin from "@/mixins/routers.js";

import { mapGetters, mapMutations } from "vuex";

export default {
  data: () => ({
    showCard: true,
    animateButton: "",
    animations: {
      sad: "medicine__sad",
      happy: "medicine__happy",
      heart: "medicine__heart",
    },
    lastButton: "",
    isButtonDisabled: false,
  }),
  methods: {
    ...mapMutations(["increaseCounter", "gameOver"]),
    buttonsActions() {
      return {
        sad: () => {
          this.increaseCounter("sad");
        },
        happy: () => {
          this.increaseCounter("happy");
        },
        heart: () => {
          this.increaseCounter("heart");
        },
      };
    },
    moveCard(event) {
      try {
        this.lastButton = event.target.attributes["data-btn"].nodeValue; // which button was pushed.
        this.isButtonDisabled = true;
      } catch (error) {
        if (error.name !== "TypeError") {
          throw error;
        }
      }

      this.setMedicineClasse(); // add animate class

      setTimeout(() => {
        this.showCard = false; // hide card after animation
      }, 0);
    },
    setMedicineClasse() {
      const value = this.lastButton;
      this.animateButton = this.animations[value];
    },
    nextCard() {
      const actions = this.buttonsActions();
      const value = this.lastButton;

      if (this.getCurrentCard < this.getUsersLength - 1) {
        actions[value]();
      } else {
        actions[value]();
        this.showResults();
      }
    },
    showResults() {
      if (this.getCurrentCard == this.getUsersLength) {
        this.gameOver();
        this.toFinalPage();
      }
    },

    // Animations
    afterLeave: function () {
      // after animation incriese counter,  show next card and reset animation class
      this.nextCard();
      this.animateButton = "";
      this.showCard = true;
      this.isButtonDisabled = false;
    },
  },
  computed: {
    ...mapGetters(["getUsersLength", "getCounters"]),
    getCurrentCard() {
      return this.getCounters.sum;
    },
    getClassName() {
      return [this.animateButton];
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
  overflow: hidden;
  height: 100%;

  &__field {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100% - 15%;
  }

  &__card {
    position: relative;
    opacity: 1;
  }

  &__actions {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 15%; //64px + 90px;

    display: flex;
    justify-content: space-around;

    @media screen and (min-height: 1100px) {
      height: 11%;
    }
  }

  &__button {
    @include additionButton();
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

.medicine {
  &__sad {
    animation: left-out 1s;

    &::before {
      @include medicine("Препарат 1", $purple-card);
    }
  }

  &__happy {
    animation: up-out 1s;

    &::before {
      @include medicine("Препарат 2", $blue-card);
    }
  }

  &__heart {
    animation: right-out 1s;

    &::before {
      @include medicine("Препарат 3", $yellow-card);
    }
  }
}

// Animations

.card-enter-active {
  transition: opacity 0.5s;
}
.card-enter {
  opacity: 0;
}

@include animations-card;
</style>