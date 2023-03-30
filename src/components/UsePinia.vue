<template>
  <h1>{{ userStore.name }}</h1>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/user';

const userStore = useUserStore();
// userStore.name = 'UsePinia'; // 直接修改不推荐
userStore.updateName('UsePinia'); // 推荐使用方法修改
</script>
