const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            showParagraph: true,
            userInputColor: ''
        }
    },
    computed: {
        paragraphClass() {
            return {
                user1: this.userInput === 'user1',
                user2: this.userInput === 'user2',
                visible: this.showParagraph,
                hidden: !this.showParagraph
            };
        }
    },
    methods: {
        toggleParagraph() {
            this.showParagraph = !this.showParagraph;
        }
    }
});

app.mount('#assignment');