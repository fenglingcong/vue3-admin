<template>
  <a-layout-header
    :style="{ }"
    class="header-box">
    <div class="header-fold">
      <component :is="collapsed ? 'MenuFoldOutlined' : 'MenuUnfoldOutlined'" />
    </div>
  </a-layout-header>
</template>

<script>
import { ref } from 'vue';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons-vue';

export default {
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  },
  setup() {
    const collapsed = ref(true);
    return {
      collapsed,
    };
  },
};
</script>

<style lang='less' scoped>
.header {
  &-box {
    background-color: #fff;
  }

  &-fold {
    height: 64px;
    line-height: 64px;
    font-size: 24px;
  }
}
</style>
