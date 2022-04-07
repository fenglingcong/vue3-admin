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
    :collapsed="collapsed"
    :trigger="null"
    collapsible>
    <div class="sider-logo">
      <div class="sider-logo__inner">
        <SmileFilled
          class="sider-logo__img"
        />
        <span class="sider-logo__text">管理系统</span>
      </div>
    </div>
    <a-menu
      mode="inline"
      theme="dark">
      <template v-for="item in menus">
        <a-sub-menu
          v-if="item.children && item.children.length"
          :key="item.name">
          <template #icon>
            <component :is="item.meta.icon" />
          </template>
          <template #title>{{ item.meta.title }}</template>
          <template v-for="subItem in item.children">
            <a-sub-menu
              v-if="subItem.children && subItem.children.length"
              :key="subItem.name">
              <template #title>{{ subItem.meta.title }}</template>
              <a-menu-item
                v-for="l3Item in subItem.children"
                :key="l3Item.name">
                {{ l3Item.meta.title }}
              </a-menu-item>
            </a-sub-menu>
            <a-menu-item
              v-else
              :key="subItem.name">
              {{ subItem.meta.title }}
            </a-menu-item>
          </template>
        </a-sub-menu>
        <a-menu-item
          v-else
          :key="item.name">
          <template #icon>
            <component :is="item.meta.icon" />
          </template>
          {{ item.meta.title }}
        </a-menu-item>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { asyncRoutes } from '@/config/routes/index';
import { SmileFilled } from '@ant-design/icons-vue';

export default {
  components: {
    SmileFilled,
  },
  props: {
    collapsed: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const menus = asyncRoutes[0].children;
    return {
      menus,
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
