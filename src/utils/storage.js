import Storage from 'vue-ls';

const options = {
  namespace: 'OS_',
  name: 'ls', // name variable Vue.[ls] or this.[$ls],
  storage: 'local',
};
const { ls } = Storage.useStorage(options);

export default ls;
