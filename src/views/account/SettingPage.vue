<template>
  <div style="width: 500px; height: 500px;">
    <vue-cropper
      ref="cropper"
      :img="options.img"
      :autoCrop="options.autoCrop"
      :fixed="options.fixed"
      @realTime="realTime"
    />
  </div>
  <a href="https://github.com/xyxiao001/vue-cropper" target="_blank">vue-cropper文档</a>
  <img
    v-if="previews && previews.url"
    :src="previews"
    :style="previews.img"
    alt="preview"
  />
  {{ previews }}1{{ options.sss }}
</template>

<script setup>
import 'vue-cropper/dist/index.css';
import { VueCropper } from 'vue-cropper';
import { reactive, ref } from 'vue';

const cropper = ref(null);
const options = reactive({
  img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ypiq.cn%2Fwp-content%2Fuploads%2F2021%2F09%2Fart0024520467.jpg&refer=http%3A%2F%2Fwww.ypiq.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653201336&t=7263610a139051d67ff924452664b15f',
  size: 1,
  outputType: '',
  autoCrop: true,
  fixed: true,
});

let previews = reactive({
  url: '',
});
const realTime = (data) => {
  previews = data;
  console.log(previews);
  options.sss = 3232;
};
</script>

<style lang="less" scoped></style>
