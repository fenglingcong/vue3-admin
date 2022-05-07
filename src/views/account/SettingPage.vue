<template>
  <a-avatar :size="120" :src="userInfo.avatar" @click="showModal">
    <template #icon><user-outlined /></template>
  </a-avatar>
  <a-input
    :maxLength="10"
    v-model:value.trim="userInfo.userName"
  />

  <a-button type="primary" @click="updateInfo">更新</a-button>

  <avatar-modal
    @save="save"
    ref="modalRef"
  />
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useStore } from 'vuex';
import { UserOutlined } from '@ant-design/icons-vue';
import AvatarModal from './components/AvatarModal';

const store = useStore();
const modalRef = ref(null);
const userInfo = reactive({ ...store.getters.userInfo });

const showModal = () => {
  modalRef.value.show();
};

const save = (data, cb) => {
  userInfo.avatar = data;
  cb();
};

const updateInfo = () => {
  if (!userInfo.userName) return;
  store.commit('SET_USER_INFO', { ...userInfo });
};
</script>

<!--
<script>
import {
  ref,
  reactive,
} from 'vue';
import { useStore } from 'vuex';
import { UserOutlined } from '@ant-design/icons-vue';
import AvatarModal from './components/AvatarModal';

export default {
  components: {
    UserOutlined,
    AvatarModal,
  },
  setup() {
    const store = useStore();
    const modalRef = ref(null);
    const userInfo = reactive({ ...store.getters.userInfo });

    const showModal = () => {
      modalRef.value.show();
    };

    const save = (data, cb) => {
      userInfo.avatar = data;
      cb();
    };

    const updateInfo = () => {
      store.commit('SET_USER_INFO', userInfo);
    };

    return {
      userInfo,
      modalRef,
      showModal,
      save,
      updateInfo,
    };
  },
};
</script>
 -->
