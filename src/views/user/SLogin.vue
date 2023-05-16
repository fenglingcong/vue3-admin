<template>
  <div class="login-container">
    <div class="login-head">Smile Admin System</div>
    <a-form
      :model="formState"
      :rules="rules"
      name="login"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      validateOnRuleChange
    >
      <a-form-item name="username">
        <a-input
          :placeholder="$t('account.userName')"
          v-model:value.trim="formState.username">
          <template #prefix>
            <user-outlined style="color: #bbb;" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item name="password">
        <a-input-password
          :placeholder="$t('account.password')"
          v-model:value.trim="formState.password">
          <template #prefix>
            <lock-outlined style="color: #bbb;" />
          </template>
        </a-input-password>
      </a-form-item>

      <a-form-item name="remember">
        <a-checkbox
          v-model:checked="remember"
          @change="changeFlag">{{ $t('account.remember') }}</a-checkbox>
      </a-form-item>

      <a-form-item>
        <a-button
          class="login-submit"
          :disabled="disabled"
          :loading="loading"
          type="primary"
          html-type="submit"
          >{{ $t('action.login') }}</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup>
import {
  ref,
  reactive,
  computed,
} from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { useI18n } from 'vue-i18n/index';
import { message } from 'ant-design-vue';

const formState = reactive({
  username: '',
  password: '',
});
const { t } = useI18n();
const rules = computed(() => ({
  username: { required: true, message: t('account.pleaseInputAccount') },
  password: { required: true, message: t('account.pleaseInputPassword') },
}));

const disabled = computed(() => !(formState.username && formState.password));
const loading = ref(false);

const store = useStore();
const router = useRouter();
const route = useRoute();
const remember = ref(store.getters.remember);
if (remember.value) {
  formState.username = 'admin';
  formState.password = '123456';
}

const changeFlag = (e) => {
  const { checked } = e.target;
  store.commit('SET_REMEMBER', checked);
};

const onFinish = (values) => {
  loading.value = true;
  store.dispatch('login', values)
    .then(() => {
      loading.value = false;
      const path = route.query.redirect || '/';
      router.push({ path });
    })
    .catch((err) => {
      loading.value = false;
      message.error(err.msg);
    });
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
</script>

<style lang="less" scoped>
.login {
  &-head {
    padding-bottom: 20px;
    text-align: center;
    font-size: 28px;
    font-weight: 600;
  }

  &-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    width: 360px;
  }

  &-submit {
    width: 100%;
  }
}
</style>
