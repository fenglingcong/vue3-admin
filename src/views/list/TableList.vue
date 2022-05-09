<template>
  <a-card :bordered="false">
    <a-form layout="inline" class="app-filter-wrapper">
      <a-form-item :label="$t('user.name')">
        <a-input
          :placeholder="$t('common.pleaseInput')"
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
            @click="searchQuery">{{ $t('action.search') }}</a-button>
          <a-button @click="resetQuery">{{ $t('action.reset') }}</a-button>
        </a-space>
      </a-form-item>
    </a-form>

    <a-alert
      class="mb10"
      :message="`${$t('common.all')} ${total} ${$t('common.item')}`"
      type="info"
    />

    <a-table
      :loading="loading"
      :dataSource="list"
      :columns="columns"
    />
  </a-card>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n/index';
import getTableList from './composables/getTableList';
import filterList from './composables/filterList';

const { t } = useI18n();
const columns = computed(() => [
  {
    title: t('user.name'),
    dataIndex: 'name',
  },
  {
    title: t('user.age'),
    dataIndex: 'age',
  },
  {
    title: t('user.address'),
    dataIndex: 'address',
  },
]);

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
</script>
