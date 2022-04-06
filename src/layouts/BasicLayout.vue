<template>
  <a-layout has-sider>
    <app-sider
      :collapsed="collapsed"
    />
    <a-layout :style="{ marginLeft: collapsed ? '80px' : '200px' }">
      <app-header
        :collapsed="collapsed"
        @fold="handleFold"
      />
      <a-layout-content>
        <router-view />
        <div style="height: 1500px"></div>
      </a-layout-content>
      <app-footer />
    </a-layout>
  </a-layout>
</template>

<script>
import { ref } from 'vue';
import AppSider from './AppSider.vue';
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';

export default {
  components: {
    AppSider,
    AppHeader,
    AppFooter,
  },
  setup() {
    const collapsed = ref(false);
    const handleFold = () => {
      collapsed.value = !collapsed.value;
    };

    return {
      collapsed,
      handleFold,
    };
  },
};
</script>

<style lang='less' scoped>
</style>
