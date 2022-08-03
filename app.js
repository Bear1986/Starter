const vm = Vue.createApp({
  data() {
    return {
      firstName: "first name",
      lastName: "last name",
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
  },
}).mount("#app");

// setTimeout(() => {
//   vm.firstName = "Arthur";
// }, 2000);
