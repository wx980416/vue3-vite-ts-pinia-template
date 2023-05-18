<script setup lang="ts" name="home">
import { computed } from 'vue';
import { useUserStore } from '@/store/user';
const userStore = useUserStore();
const name = computed(() => userStore.name);
const input = computed({
  get: () => userStore.name,
  set: (val) => userStore.setName(val),
});
</script>

<template>
  <div>home</div>
  <div>{{ name }}</div>
  <el-input v-model="input" placeholder="Please input"></el-input>
</template>

<style scoped></style>
