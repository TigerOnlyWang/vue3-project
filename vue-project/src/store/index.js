import { defineStore } from "pinia";
import { removeToken } from "../utils/auth";
export const mainStore = defineStore("main", {
  state() {
    return {
      nav: [],
    };
  },
  actions: {
    setNav(data) {
      this.nav = data;
    },
    deleteCacheAndToken() {
      //清除token
      removeToken();
      //清除缓存
      this.nav = []
    },
  },
});
