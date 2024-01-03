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
    return {
      members: window.members,
      newMember: {},
    };
  },

  methods: {
    addMember: function () {
      if (
        !this.newMember.fname ||
        !this.newMember.lname ||
        !this.newMember.instrument
      )
        window.alert('Fill all the fields before adding a new member');
      return;
      this.members.push(this.newMember);
      this.newMember = {};
      console.log(this.members);
    },
  },
};

Vue.createApp(handlingForms).mount('#app');
