import { mapMutations } from "vuex";

import routersMixin from "@/mixins/routers.js";

export default {
    mixins: [routersMixin],
    methods: {
        ...mapMutations(["retryGame", "exitGame"]),
        toHome() {
            this.exitGame();
            this.toHomePage();
        },
        toNewGame() {
            this.retryGame();
            this.toMainPage();
        }
    }
}