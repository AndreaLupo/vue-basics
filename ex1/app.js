const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and learn Vue!',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5) {
                return 'Learn Vue!';
            } else {
                return 'Master  Vue!';
            }
        }
    }
});

// uniquely identify element in html that will contain the vue app.
app.mount('#user-goal');