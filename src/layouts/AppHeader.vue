<template>
  <a-layout-header
    :style="{
      left: collapsed ? '80px' : '200px',
      transition: 'all 0.2s',
    }"
    class="header-box">
    <div class="header-fold">
      <component
        :is="collapsed ? 'MenuUnfoldOutlined' : 'MenuFoldOutlined'"
        @click="$emit('fold')"
      />
    </div>
  </a-layout-header>
</template>

<script>
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons-vue';

export default {
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  },
  props: {
    collapsed: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang='less' scoped>
.header {
  &-box {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    padding: 0 16px;
    background-color: #fff;
  }

  &-fold {
    display: inline-block;
    height: 64px;
    line-height: 64px;
    font-size: 24px;
    cursor: pointer;
  }
}
</style>
