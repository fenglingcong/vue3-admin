<template>
  <a-table
    size="middle"
    bordered
    :loading="loading"
    :columns="columns"
    rowKey="id"
    :dataSource="list"
  />
</template>

<script setup>
defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  list: {
    type: Array,
    default: () => ([]),
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
</script>
