<template>
  <a-form
    ref="formRef"
    :model="state"
    v-bind="formItemLayoutWithOutLabel">
    <a-form-item
      v-for="(item , index) in state.fieldList"
      :key="item.key"
      v-bind="index === 0 ? formItemLayout : {}"
      :label="index === 0 ? labelName : ''"
      :name="['fieldList', index, 'value']"
      :rules="{
        required: true,
        message: 'please input field',
        trigger: 'change',
      }"
    >
      <div class="box-item">
        <a-input
          v-model:value="item.value"
          placeholder="请输入"
        />
        <minus-circle-outlined
          v-if="state.fieldList.length > 1"
          class="box-action"
          @click="removeContacts(item)"
        />
      </div>
    </a-form-item>
    <a-form-item>
      <a-button
        type="dashed"
        style="width: 100%;"
        @click="addContacts">
        <plus-outlined
        />
        新增
      </a-button>
    </a-form-item>
    <a-form-item v-if="showSubmit">
      <a-space>
        <a-button type="primary" @click="save">Submit</a-button>
        <a-button @click="resetForm">Reset</a-button>
      </a-space>
    </a-form-item>
  </a-form>
</template>

<script setup>
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { ref, reactive } from 'vue';

defineProps({
  labelName: {
    type: String,
    default: '联系人',
  },
  showSubmit: {
    type: Boolean,
    default: false,
  },
});

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    lg: {
      offset: 9,
      span: 7,
    },
    sm: {
      offset: 7,
      span: 17,
    },
  },
};
const formItemLayout = {
  labelCol: {
    lg: { span: 9 },
    sm: { span: 7 },
  },
  wrapperCol: {
    lg: { span: 7 },
    sm: { span: 17 },
  },
};

const formRef = ref();
const state = reactive({
  fieldList: [
    { key: 1, value: '' },
  ],
});

const save = () => {
  formRef.value.validate()
    .then((res) => {
      console.log('vlaue', res, state.fieldList);
    })
    .catch((err) => {
      console.log('err', err);
    });
};

const resetForm = () => {
  formRef.value.resetFields();
};

const removeContacts = (item) => {
  const index = state.fieldList.indexOf(item);
  if (index !== -1) {
    state.fieldList.splice(index, 1);
  }
};

const addContacts = () => {
  state.fieldList.push({
    value: '',
    key: Date.now(),
  });
};

const submit = () => formRef.value.validate();
defineExpose({
  submit,
});
</script>

<style lang="less" scoped>
.box {
  &-item {
    display: flex;
    align-items: center;
  }

  &-action {
    margin-left: 10px;
    font-size: 24px;
    color: #999;
  }
}
</style>
