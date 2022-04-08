<template>
  <a-table
    :loading="loading"
    :dataSource="list"
    :columns="columns"
  />
</template>
<script>
import { defineComponent, ref, onMounted } from 'vue';
import { getList } from '@/api/index';

export default defineComponent({
  setup() {
    const list = ref([]);
    const loading = ref(false);
    const handleList = () => {
      loading.value = true;
      getList({
        pageSize: 10,
        pageNum: 1,
      })
        .then((res) => {
          loading.value = false;
          list.value = res.list;
        });
    };

    onMounted(handleList);

    return {
      columns: [
        {
          title: '姓名',
          dataIndex: 'talentName',
        },
        {
          title: '年龄',
          dataIndex: 'age',
        },
        {
          title: '住址',
          dataIndex: 'address',
        },
      ],
      loading,
      list,
      handleList,
    };
  },
});
</script>
