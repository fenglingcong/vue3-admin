<template>
  <a-card>
    <a-form
      v-bind="layout"
      autocomplete="off"
      :scrollToFirstError="{ block: 'end', }"
    >
      <a-form-item label="公司名称" required>
        <a-input
          placeholder="请输入公司名称"
          :maxlength="10"
          v-model:value.trim="infoRef.companyName"
        />
      </a-form-item>
      <a-form-item label="公司类型" required>
        <a-radio-group
          placeholder="请输入公司类型"
          v-model:value="infoRef.type">
          <a-radio :value="1">个体工商户</a-radio>
          <a-radio :value="3">独资企业</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="员工数量" required>
        <a-input-number
          placeholder="请输入"
          :precision="0"
          :min="0"
          :max="999999"
          v-model:value="infoRef.number"
        />
      </a-form-item>
      <a-form-item label="法人" required>
        <a-input
          placeholder="请输入法人"
          v-model:value.trim="infoRef.legalPerson"
        />
      </a-form-item>
      <a-form-item label="身份证号" required>
        <a-input
          placeholder="请输入身份证号"
          v-model:value.trim="infoRef.idcard"
        />
      </a-form-item>
      <a-form-item label="申请时间" required>
        <a-date-picker
          placeholder="请输入申请时间"
          v-model:value="infoRef.applyTime"
          valueFormat="YYYY-MM-DD"
        />
      </a-form-item>
      <a-form-item label="电话" required>
        <a-input
          placeholder="请输入电话"
          v-model:value.trim="infoRef.phone"
        />
      </a-form-item>
      <a-form-item label="邮箱" required>
        <a-input
          placeholder="请输入邮箱"
          v-model:value.trim="infoRef.email"
        />
      </a-form-item>
      <a-form-item label="办公地址" required>
        <a-textarea
          placeholder="请输入办公地址"
          :maxlength="100"
          v-model:value.trim="infoRef.address"
        />
      </a-form-item>
      <a-form-item :wrapperCol="{ span: 24 }" style="text-align: center;" v-bind="errorInfos">
        <a-button type="primary" @click.prevent="onSubmit">注册公司</a-button>
        <a-button class="ml10" @click="resetFields">reset</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script setup>
import { reactive, computed } from 'vue';
import { toArray } from 'lodash-es';
import { Form } from 'ant-design-vue';

const useFormHandle = Form.useForm;
const layout = {
  labelCol: {
    lg: { span: 9 },
    sm: { span: 7 },
  },
  wrapperCol: {
    lg: { span: 7 },
    sm: { span: 17 },
  },
};
const infoRef = reactive({
  companyName: '',
  type: '',
  number: '',
  legalPerson: '',
  idcard: '',
  applyTime: '',
  phone: '',
  email: '',
  address: '',
});
const rules = reactive({
  companyName: [{ required: true, message: '请输入公司名称' }],
  type: [{ required: true, message: '请选择公司类型' }],
  number: [{ required: true, message: '请输入员工数量' }],
  legalPerson: [{ required: true, message: '请输入法人' }],
  idcard: [{ required: true, message: '请输入身份证号' }],
  applyTime: [{ required: true, message: '请选择申请时间' }],
  phone: [{ required: true, message: '请输入电话' }],
  email: [{ required: true, message: '请输入邮箱' }],
  address: [{ required: true, message: '请输入办公地址' }],
});
const {
  resetFields,
  validate,
  validateInfos,
  mergeValidateInfo,
} = useFormHandle(infoRef, rules);

const onSubmit = () => {
  validate()
    .then(() => {
      console.log(infoRef);
    })
    .catch((err) => {
      console.log('error', err);
    });
};
const errorInfos = computed(() => mergeValidateInfo(toArray(validateInfos)));
</script>
