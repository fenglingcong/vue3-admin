<template>
  <a-card>
    <a-form
      ref="formRef"
      v-bind="layout"
      :model="infoRef"
      :rules="rules"
      autocomplete="off"
      @finish="handleFinish"
      @validate="handleValidate"
      @finishFailed="handleFinishFailed"
      scrollToFirstError
    >
      <a-form-item label="公司名称" name="companyName">
        <a-input
          placeholder="请输入公司名称"
          :maxlength="10"
          v-model:value.trim="infoRef.companyName"
        />
      </a-form-item>
      <a-form-item label="公司类型" name="type">
        <a-radio-group
          placeholder="请输入公司类型"
          v-model:value="infoRef.type">
          <a-radio :value="1">个体工商户</a-radio>
          <a-radio :value="3">独资企业</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="员工数量" name="number">
        <a-input-number
          placeholder="请输入"
          :precision="0"
          :min="0"
          :max="999999"
          v-model:value.trim="infoRef.number"
        />
      </a-form-item>
      <a-form-item label="法人" name="legalPerson">
        <a-input
          placeholder="请输入法人"
          v-model:value.trim="infoRef.legalPerson"
        />
      </a-form-item>
      <a-form-item label="身份证号" name="idcard">
        <a-input
          placeholder="请输入身份证号"
          v-model:value.trim="infoRef.idcard"
        />
      </a-form-item>
      <a-form-item label="申请时间" name="applyTime">
        <a-date-picker
          placeholder="请输入申请时间"
          v-model:value="infoRef.applyTime"
          valueFormat="YYYY-MM-DD"
        />
      </a-form-item>
      <a-form-item label="电话" name="phone">
        <a-input
          placeholder="请输入电话"
          v-model:value.trim="infoRef.phone"
        />
      </a-form-item>
      <a-form-item label="邮箱" name="email">
        <a-input
          placeholder="请输入邮箱"
          v-model:value.trim="infoRef.email"
        />
      </a-form-item>
      <a-form-item label="办公地址" name="address">
        <a-textarea
          placeholder="请输入办公地址"
          :maxlength="100"
          v-model:value.trim="infoRef.address"
        />
      </a-form-item>
      <a-form-item :wrapperCol="{ span: 24 }" style="text-align: center;">
        <a-button type="primary" html-type="submit">注册公司</a-button>
        <a-button class="ml10" @click="resetForm">reset</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script setup>
import { ref, reactive } from 'vue';

const formRef = ref();
const layout = {
  labelCol: {
    lg: { span: 10 },
    sm: { span: 7 },
  },
  wrapperCol: {
    lg: { span: 7 },
    sm: { span: 17 },
  },
};
const infoRef = reactive({});
const rules = {
  companyName: [{ required: true, message: '请输入公司名称' }],
  type: [{ required: true, message: '请选择公司类型', trigger: 'change' }],
  number: [{ required: true, message: '请输入员工数量' }],
  legalPerson: [{ required: true, message: '请输入法人' }],
  idcard: [{ required: true, message: '请输入身份证号' }],
  applyTime: [{ required: true, message: '请选择申请时间', trigger: 'change' }],
  phone: [{ required: true, message: '请输入电话' }],
  email: [{ required: true, message: '请输入邮箱' }],
  address: [{ required: true, message: '请输入办公地址' }],
};

const handleFinish = (values) => {
  console.log(values);
};

const handleFinishFailed = (errors) => {
  console.log(errors);
};

const resetForm = () => {
  formRef.value.resetFields();
};

const handleValidate = (...args) => {
  console.log(args);
};
</script>
