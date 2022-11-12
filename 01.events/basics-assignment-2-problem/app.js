const app = Vue.createApp({
    data() {
        return {
            firstText: '',
            secondText: ''
        };
    },
    methods: {
        showAlert(msg) {
            alert(msg);
        },
        updateFirstText(event) {
            this.firstText = event.target.value;
        },

        updateSecondText(event) {
            this.secondText = event.target.value;
        }
    }
});

app.mount('#assignment');