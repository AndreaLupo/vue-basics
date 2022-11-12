const app = Vue.createApp({
    data() {
      return {
        counter: 0
      };
    },
    computed: {
      result() {
        if(this.counter < 37) {
            return 'Not there yet';
        } else if (this.counter > 37) {
            return 'Too much!';
        } else {
            return this.counter;
        }
      }
    },
    watch: {
        counter(newValue) {
        // I can omit the newValue paramater
        if(newValue > 50) {
          const that = this;
          setTimeout(function() {
            that.counter = 0
          }, 5000);
        }
      }
    },
    methods: {
      add(value) {
        this.counter = this.counter + value;
      }
    }
  });
  
  app.mount('#assignment');
  