const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  computed: {
    fullName() {
      console.log('Output fullname');
      if(this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Lupo';
    }
  },
  methods: {
    /**
     * Note: if you use this method within the template, this will be called 
     * every time any variable changes its value!!
     * @returns 
     */
    outputFullName() {
      console.log('Output fullname');
      if(this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Lupo';
    },
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
    },
    submitForm(event) {
      // event.preventDefault();
      alert('Submitted');
    },
    confirmName() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
    }

  }
});

app.mount('#events');
