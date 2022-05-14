<template>
  <a-modal
    title="选择modal"
    v-model:visible="visible"
    @ok="save">adfasdf</a-modal>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);

const show = () => {
  visible.value = true;
};
const hide = () => {
  visible.value = false;
};

const emits = defineEmits(['save']);

const save = () => {
  emits('save', () => {
    hide();
  });
};

defineExpose({
  show,
});
</script>

<style lang='less' scoped>
</style>
