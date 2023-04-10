import { defineStore } from 'pinia';

type UserState = {
  name: string;
};

export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: (): UserState => {
    return {
      name: '张三',
    };
  },
  actions: {
    setName(name: string) {
      this.name = name;
    },
  },
});
