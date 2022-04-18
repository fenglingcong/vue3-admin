<template>
  <a-modal
    v-model:visible="visible"
    :width="420"
    @ok="handleOk()">
    <template #title>
      {{ $t('action.set') }}
      <a-button
        size="small"
        type="link"
        @click="handleOk(true)">
        {{ $t('action.reset') }}
      </a-button>
    </template>
    <a-input
      class="theme-color"
      type="color"
      v-model:value="color"
    />
  </a-modal>
  <a-button
    class="theme-set"
    v-show="!visible"
    type="primary"
    size="large"
    @click="toggleModal">
    <template #icon>
      <setting-outlined />
    </template>
  </a-button>
</template>

<script setup>
import { useStore } from 'vuex';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n/index';
import { ConfigProvider, message } from 'ant-design-vue';
import { SettingOutlined } from '@ant-design/icons-vue';

const { t } = useI18n();
const visible = ref(false);
const color = ref('#1890ff');
const toggleModal = () => {
  visible.value = !visible.value;
};

const store = useStore();
const handleOk = (reset = false) => {
  console.log(reset);
  if (reset) {
    color.value = '#1890ff';
  }
  if (!color.value) {
    message.error(t('common.pleaseSelect'));
    return;
  }
  ConfigProvider.config({
    theme: ({
      primaryColor: color.value,
    }),
  });
  store.commit('SET_THEME_COLOR', color.value);
  toggleModal();
};
</script>

<style lang='less' scoped>
.theme {
  &-color[type=color] {
    margin: 0 auto;
    display: block;
    width: 300px;
    height: 120px;
  }

  &-set {
    position: fixed;
    right: 0;
    bottom: 60px;
    font-size: 20px;
  }
}
</style>
