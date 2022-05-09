<template>
  <div>首页</div>
  <a-button type="primary" @click="add">新增</a-button>{{ count }}
  <a-button type="primary" @click="logout">退出</a-button>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count.count;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push({ name: 'login' });
        });
    },
    add() {
      console.log(this.$store);
      this.$store.commit('add');
    },
  },
};
</script>
