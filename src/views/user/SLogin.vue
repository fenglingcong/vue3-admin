<template>
  <a-button type="primary" @click="submit">登录</a-button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['login']),
    submit(data) {
      this.login(data)
        .then(() => {
          this.$router.push({ name: 'index' });
        });
    },
  },
};
</script>
