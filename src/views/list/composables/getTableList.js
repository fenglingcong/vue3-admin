import { ref, onMounted } from 'vue';
import { getList } from '@/api/index';

export default function getTableList() {
  const loading = ref(false);
  const list = ref([]);
  const total = ref(0);
  const handleList = async () => {
    loading.value = true;
    await getList({
      pageSize: 1,
      pageNum: 10,
    })
      .then((res) => {
        loading.value = false;
        list.value = res.list;
        total.value = res.total;
      });
  };

  onMounted(handleList);

  return {
    loading,
    list,
    total,
    handleList,
  };
}
