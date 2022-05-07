<template>
  <a-layout-header
    :style="{
      left: collapsed ? '80px' : '200px',
    }"
    class="header-box">
    <div class="header-fold">
      <component
        :is="collapsed ? MenuUnfoldOutlined : MenuFoldOutlined"
        @click="$emit('fold')"
      />
    </div>
    <div class="header-info">
      <a-space v-if="userInfo">
        <a-avatar :size="32" :src="userInfo.avatar">
          <template #icon><user-outlined /></template>
        </a-avatar>
        {{ userInfo.userName }}
      </a-space>
      <switch-lang
        class="header-info__lang ml10"
      />
    </div>
  </a-layout-header>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons-vue';
import SwitchLang from './SwitchLang';

defineProps({
  collapsed: {
    type: Boolean,
    required: true,
  },
});

const store = useStore();
const userInfo = computed(() => store.getters.userInfo);
</script>

<style lang='less' scoped>
.header {
  &-box {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    padding: 0 16px;
    transition: all 0.2s;
    background-color: #fff;
    box-shadow: 0 1px 6px 1px rgba(#000, 0.1);
  }

  &-fold {
    display: inline-block;
    font-size: 24px;
    cursor: pointer;
  }

  &-info {
    float: right;
    display: flex;
    align-items: center;

    :deep(&__lang) {
      display: inline-block;
      height: 100%;
      font-size: 24px;
    }
  }
}
</style>
