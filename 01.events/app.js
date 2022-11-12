const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    add() {
      this.counter = this.counter + 10;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      // event is simply the javascript event from the input event, not vue specific.
      this.name = event.target.value;
    },
    setNameAndSurname(event, surname) {
      this.name = event.target.value + '' + surname;
    }
  }
});

app.mount('#events');
