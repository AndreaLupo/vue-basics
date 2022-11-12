const app = Vue.createApp({
    data () {
        return {
            name: 'Andrea',
            age: 29,
            url: 'http://wips.plug.it/cips/paginegialle.it/magazine/cms/2022/01/cane-di-razza.jpg?w=768&h=432&a=c',
            inputText: 'This is is!'
        };
    },
    methods: {
        getAgeIn5Years() {
            return this.age + 5;
        },
        getRandomNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment');