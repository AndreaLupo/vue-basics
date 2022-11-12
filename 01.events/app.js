const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      lastName: ''
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
  watch: {
    /* Not a good use case, better use a computed property for this 
    name(newValue, oldValue) {
      // this.fullName = this.name + ' Lupo';
      this.fullName = newValue + ' Lupo';
    } */
    counter(newValue) {
      // I can omit the newValue paramater
      if(newValue > 50) {
        const that = this;
        setTimeout(function() {
          that.counter = 0
        }, 1000);
      }
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
