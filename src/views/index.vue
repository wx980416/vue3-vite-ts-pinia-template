<script setup lang="ts">
import MdPreview from '@/components/MdPreview.vue';
import DWrap from '@/components/DWrap.vue';
import { ref, onMounted } from 'vue';
import test from './test.md?raw';
const modelValue = ref('');
// 随机生成md格式文本
const generateMdTitle = () => {
  // 先生成标题
  const title = `# 我是标题`;
  return `${title}\n`;
};
let i = 1;
const generateMdParagraph = () => {
  const paragraph = `我是后端生成的文本`;
  return {
    md: `${paragraph}\n`,
    index: i++,
  };
};
let timer: number;

onMounted(() => {
  console.log(test);
  // timer = setInterval(() => {
  //   modelValue.value += generateMdTitle();
  // }, 100);
  // setTimeout(() => {
  //   clearInterval(timer);
  //   // 再生成段落
  //   timer = setInterval(() => {
  //     const { md, index } = generateMdParagraph();
  //     const lines = modelValue.value.split('#');
  //     console.log(lines);
  //     lines[index] += md;
  //     modelValue.value = lines.join('#');
  //   }, 100);
  //   setTimeout(() => {
  //     clearInterval(timer);
  //   }, 1000);
  // }, 1000);
});
</script>

<template>
  <div>
    <!-- <MdPreview :modelValue="modelValue" /> -->
    <!-- <MdPreview :modelValue="test" /> -->
    <DWrap />
  </div>
</template>

<style scoped lang="scss"></style>
