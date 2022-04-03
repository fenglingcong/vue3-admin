<template>
  <a-layout-sider
    :style="{
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      height: '100vh',
      overflow: 'auto',
    }"
    v-model="collapsed"
    :trigger="null"
    collapsible>
    <div class="sider-logo">
      <div class="sider-logo__inner">
        <SmileFilled
          class="sider-logo__img"
        />
        <span class="sider-logo__text">管理系统</span>
      </div>
      <div class="sider-fold">
        <component :is="collapsed ? 'MenuFoldOutlined' : 'MenuUnfoldOutlined'" />
      </div>
    </div>
    <a-menu
      theme="dark">
      <a-menu-item
        v-for="item in menus"
        :key="item.name">
        <template #icon>
          <component :is="item.meta.icon" />
        </template>
        {{ item.meta.title }}
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { ref } from 'vue';
import { asyncRoutes } from '@/config/routes/index';
import {
  SmileFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons-vue';

export default {
  components: {
    SmileFilled,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  },
  setup() {
    const menus = asyncRoutes[0].children;
    const collapsed = ref(true);
    return {
      menus,
      collapsed,
    };
  },
};
</script>

<style lang='less' scoped>
.sider {
  &-logo {
    position: relative;
    padding: 12px;
    height: 64px;

    &__inner {
      height: 40px;
      background-color: rgba(255,255,255,.3);
      font-size: 24px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      overflow: hidden;
    }

    &__img {
      margin: 0 6px;
    }

    &__text {
      margin: 0 6px;
      vertical-align: top;
      font-size: 20px;
    }
  }
}
</style>
