<template>
  <a-card>
    <a-skeleton :loading="loading">
      <a-form layout="vertical" style="max-width: 600px;">
        <a-form-item label="头像">
          <a-avatar :size="120" :src="userInfo.avatar" @click="showModal">
            <template #icon><user-outlined /></template>
          </a-avatar>
        </a-form-item>
        <a-form-item label="用户名">
          <a-input
            :maxLength="10"
            v-model:value.trim="userInfo.userName"
          />
        </a-form-item>
        <a-form-item label="个人简介">
          <a-textarea
            :maxLength="200"
            v-model:value.trim="userInfo.intro"
          />
        </a-form-item>
      </a-form>

      <a-button type="primary" @click="updateInfo">更新信息</a-button>
    </a-skeleton>
  </a-card>

  <avatar-modal
    @save="save"
    ref="modalRef"
  />
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useStore } from 'vuex';
import { UserOutlined } from '@ant-design/icons-vue';
import AvatarModal from './components/AvatarModal';

const loading = ref(true);
const store = useStore();
const modalRef = ref(null);
const userInfo = reactive({ ...store.getters.userInfo });

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});

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
