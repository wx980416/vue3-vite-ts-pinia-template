<template>
  <MdPreview :modelValue="internalContent" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
// 预览模式
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
// 编辑模式
// import { MdEditor } from 'md-editor-v3';
// import 'md-editor-v3/lib/style.css';

// 使用defineProps定义组件的props
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  theme: {
    type: String,
    default: 'github', //ligt or dark
  },
});

// 使用defineEmits定义组件的emits
const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

// 内部状态
const internalContent = ref(props.modelValue);

// 监听外部传入的content变化
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue !== internalContent.value) {
      internalContent.value = newValue;
    }
  },
);

// 当内部content变化时，通知外部
watch(internalContent, (newValue) => {
  emit('update:modelValue', newValue);
});

// 根据theme定制编辑器的主题
const previewTheme = ref(`${props.theme}-preview`);
const editorTheme = ref(`${props.theme}-editor`);

watch(
  () => props.theme,
  (newTheme) => {
    previewTheme.value = `${newTheme}-preview`;
    editorTheme.value = `${newTheme}-editor`;
  },
);
</script>

<style lang="scss" scoped>
:deep(.md-editor-preview-wrapper) {
  padding: 0;
}
</style>
