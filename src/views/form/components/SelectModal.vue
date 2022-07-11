<template>
  <a-modal
    :width="600"
    title="选择modal"
    v-model:visible="visible"
    @ok="save">
    <a-table
      size="small"
      bordered
      :loading="loading"
      :dataSource="list"
      :columns="columns"
      rowKey="id"
      :row-selection="rowSelection"
    />
  </a-modal>
</template>

<script setup>
import {
  reactive,
  computed,
  toRefs,
  onMounted,
} from 'vue';
import { message } from 'ant-design-vue';
import { getSelectList } from '@/api/index';

const props = defineProps({
  tableType: {
    type: String,
    default: 'checkbox',
  },
  getCheckboxProps: {
    type: Function,
    default: () => ({}),
  },
});

const columns = [
  {
    title: '姓名',
    dataIndex: 'userName',
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
  {
    title: '分数',
    dataIndex: 'score',
  },
  {
    title: '时间',
    dataIndex: 'date',
  },
];
const state = reactive({
  visible: false,
  loading: false,
  list: [],
  selectedRowKeys: [],
});
let selectedRows = [];

const onChange = (selectedRowKeys, list) => {
  state.selectedRowKeys = selectedRowKeys;
  selectedRows = list;
};

const rowSelection = computed(() => ({
  type: props.tableType,
  selectedRowKeys: state.selectedRowKeys,
  onChange,
  getCheckboxProps: props.getCheckboxProps,
}));

const getList = () => {
  state.loading = true;
  getSelectList()
    .then((res) => {
      state.loading = false;
      state.list = res.list || [];
    })
    .catch((err) => {
      state.loading = false;
      message.error(err.msg);
    });
};

const {
  visible,
  loading,
  list,
} = toRefs(state);

const show = () => {
  state.visible = true;
  // getList(); // mock数据 模拟选中暂时在mounted获取数据
};
const hide = () => {
  state.visible = false;
};

onMounted(() => {
  getList();
});

const emits = defineEmits(['save']);

const save = () => {
  if (!state.selectedRowKeys.length) {
    message.error('至少选择一项');
    return;
  }
  emits('save', state.selectedRowKeys, selectedRows, () => {
    state.selectedRowKeys = [];
    hide();
  });
};

defineExpose({
  show,
});
</script>

<style lang='less' scoped>
</style>
