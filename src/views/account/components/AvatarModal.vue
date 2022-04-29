<template>
  <a-modal
    :width="660"
    v-model:visible="visible"
    @ok="saveAvatar">
    <template #title>
      保存头像 <a href="https://github.com/xyxiao001/vue-cropper" target="_blank">（vue-cropper文档）</a>
    </template>
    <a-row align="middle" justify="space-between">
      <a-col :span="12">
        <div style="height: 300px;">
          <vue-cropper
            ref="cropper"
            :img="options.img"
            :autoCrop="options.autoCrop"
            :fixed="options.fixed"
            fixedBox
            :autoCropWidth="options.autoCropWidth"
            :autoCropHeight="options.autoCropHeight"
            @realTime="realTime"
          />
        </div>
      </a-col>
      <a-col :span="9">
        <div
          :style="{
            width: previews.w + 'px',
            height: previews.h + 'px',
            overflow: 'hidden',
            borderRadius: '50%'
          }"
        >
          <div :style="previews.div">
            <img :src="previews.url" :style="previews.img" alt="img" />
          </div>
        </div>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="12" style="text-align: center">
        <a-space class="mt10">
          <a-button @click="changeScale(1)">
            <template #icon><plus-outlined /></template>
          </a-button>
          <a-button @click="changeScale(-1)">
            <template #icon><minus-outlined /></template>
          </a-button>
          <a-button @click="rotateLeft">
            <template #icon><undo-outlined /></template>
          </a-button>
          <a-button @click="rotateRight">
            <template #icon><redo-outlined /></template>
          </a-button>
        </a-space>
      </a-col>
    </a-row>
  </a-modal>
</template>

<script setup>
import 'vue-cropper/dist/index.css';
import { VueCropper } from 'vue-cropper';
import { reactive, ref } from 'vue';
import {
  PlusOutlined,
  MinusOutlined,
  UndoOutlined,
  RedoOutlined,
} from '@ant-design/icons-vue';

const visible = ref(false);
const cropper = ref(null);
const options = reactive({
  img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ypiq.cn%2Fwp-content%2Fuploads%2F2021%2F09%2Fart0024520467.jpg&refer=http%3A%2F%2Fwww.ypiq.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653201336&t=7263610a139051d67ff924452664b15f',
  size: 1,
  outputType: '',
  autoCrop: true,
  fixed: true,
  autoCropWidth: 160,
  autoCropHeight: 160,
});

const hide = () => {
  visible.value = false;
};

const previews = ref({});
const realTime = (data) => {
  previews.value = data;
};

const changeScale = (num = 1) => {
  cropper.value.changeScale(num);
};
const rotateLeft = () => {
  cropper.value.rotateLeft();
};
const rotateRight = () => {
  cropper.value.rotateRight();
};

const emits = defineEmits(['ok']);
const saveAvatar = () => {
  cropper.value.getCropData((data) => {
    emits('ok', data, () => {
      hide();
    });
  });
};

const show = () => {
  visible.value = true;
};
defineExpose({ show });
</script>
