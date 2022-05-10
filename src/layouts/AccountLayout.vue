<template>
  <div class="account-wrapper">
    <switch-lang
      class="account-lang"
    />
    <router-view />

    <div class="account-footer">
      <app-footer />
    </div>
  </div>
</template>

<script setup>
import SwitchLang from './SwitchLang';
import AppFooter from './AppFooter';
</script>

<style lang='less' scoped>
.account {
  &-wrapper {
    width: 100%;
    height: 100%;
    min-height: 100%;
    background-color: #f0f2f5;
  }

  :deep(&-lang) {
    position: absolute;
    top: 16px;
    right: 16px;
    line-height: 1;
    font-size: 24px;
  }

  &-footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
}
</style>
