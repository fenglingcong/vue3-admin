<template>
  <a-card :bordered="false">
    <a-form layout="inline" class="app-filter-wrapper">
      <a-form-item :label="$t('name')">
        <a-input
          placeholder="请输入"
          v-model:value="queryParams.name"
        />
      </a-form-item>
      <!-- <a-form-item label="年龄">
        <a-input
          placeholder="请输入"
          v-model:value="queryParams.age"
        />
      </a-form-item>
      <a-form-item label="住址">
        <a-input
          placeholder="请输入"
          v-model:value="queryParams.address"
        />
      </a-form-item> -->
      <a-form-item>
        <a-space>
          <a-button
            type="primary"
            @click="searchQuery">查询</a-button>
          <a-button @click="resetQuery">重置</a-button>
        </a-space>
      </a-form-item>
    </a-form>

    <a-alert
      class="mb10"
      :message="`全部 ${total} 条`"
      type="info"
    />

    <a-table
      :loading="loading"
      :dataSource="list"
      :columns="columns"
    />
  </a-card>
</template>

<script>
import { defineComponent } from 'vue';
import getTableList from './composables/getTableList';
import filterList from './composables/filterList';

export default defineComponent({
  setup() {
    const {
      loading,
      list,
      total,
      handleList,
    } = getTableList();

    const {
      queryParams,
      searchQuery,
      resetQuery,
    } = filterList(list, handleList);

    return {
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
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
      total,
      queryParams,
      searchQuery,
      resetQuery,
    };
  },
});
</script>
