members = [
  {
    fname: 'John',
    lname: 'Lennon',
    instrument: 'Acoustic Guitar',
  },
  {
    fname: 'George',
    lname: 'Harrison',
    instrument: 'Electric Guitar',
  },
];

const handlingForms = {
  data() {
    return { members: window.members };
  },

  methods: {
    addMember: () => {},
  },
};

Vue.createApp(handlingForms).mount('#app');
