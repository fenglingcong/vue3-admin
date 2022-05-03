<template>
  <a-avatar :size="120" :src="userInfo.avatar" @click="showModal">
    <template #icon><user-outlined /></template>
  </a-avatar>
  {{ userInfo.userName }}

  <a-button type="primary" @click="updateInfo">更新</a-button>

  <avatar-modal
    @ok="save"
    ref="modalRef"
  />
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { UserOutlined } from '@ant-design/icons-vue';
import AvatarModal from './components/AvatarModal';

const store = useStore();
const modalRef = ref(null);
const userInfo = (store.getters.userInfo || {});

const showModal = () => {
  modalRef.value.show();
};

const save = (data, cb) => {
  userInfo.avatar = data;
  console.log(store);
  cb();
};

const updateInfo = () => {
  store.commit('SET_USER_INFO', userInfo);
};
</script>

<style lang='less' scoped>
</style>
