import { reactive } from 'vue';

export default function filterList(list, handleList) {
  const queryParams = reactive({});
  const searchQuery = () => {
    list.value = list.value.filter((v) => v.name.includes(queryParams.name));
  };
  const resetQuery = () => {
    queryParams.name = '';
    handleList();
  };

  return {
    queryParams,
    searchQuery,
    resetQuery,
  };
}
