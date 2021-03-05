export default {
    methods: {
        toHomePage() {
            this.$router.push("/");
        },
        toMainPage() {
            this.$router.push("/main");
        },
        toFinalPage() {
            this.$router.push("/final");
        }
    }
}