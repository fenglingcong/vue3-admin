<template>
  <a-avatar :size="120" :src="avatarSrc" @click="showModal">
    <template #icon><user-outlined /></template>
  </a-avatar>

  <avatar-modal
    @ok="save"
    ref="modalRef"
  />
</template>

<script setup>
import { ref } from 'vue';
import { UserOutlined } from '@ant-design/icons-vue';
import AvatarModal from './components/AvatarModal';

const avatarSrc = ref(null);
const modalRef = ref(null);

const showModal = () => {
  modalRef.value.show();
};

const save = (data, cb) => {
  avatarSrc.value = data;
  cb();
};
</script>

<style lang='less' scoped>
</style>
