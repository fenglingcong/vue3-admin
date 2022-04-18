<template>
  <div>首页</div>
  <a-button type="primary" @click="add">新增</a-button>{{ count }}
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count.count;
    },
  },
  methods: {
    add() {
      console.log(this.$store);
      this.$store.commit('add');
    },
  },
};
</script>
