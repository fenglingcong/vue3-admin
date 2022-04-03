<template>
  <a-layout has-sider>
    <AppSider />
    <a-layout :style="{ marginLeft: '200px' }">
      <AppHeader />
      <a-layout-content>
        <router-view />
        <div style="height: 500px"></div>
      </a-layout-content>
      <AppFooter />
    </a-layout>
  </a-layout>
</template>

<script setup>
import AppSider from './AppSider.vue';
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';

</script>

<style lang='less' scoped>
</style>
