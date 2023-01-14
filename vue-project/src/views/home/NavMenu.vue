<template>
  <el-menu default-active="/home" class="el-menu-vertical-demo" :collapse="isCollapse" router>
    <el-menu-item index="/home"><span>后台管理系统</span></el-menu-item>
    <el-menu-item :index="item.path" v-for="item in nav" :key="item.path">
      <el-icon><icon-menu /></el-icon>
      <span>{{ item.title }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
//图标
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
//引入pinia
import { mainStore } from '../../store/index'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
const store = mainStore()//实例化store
const { nav } = storeToRefs(store) //结构具有响应式的数据
const props = defineProps(['isCollapse'])
</script>

<style lang="scss" scoped>
.el-menu {
  background-color: rgb(35, 118, 186);
  border: none;
  height: 100vh;
}

.el-menu-item {
  color: white;
}

.el-menu-item:hover {
  background-color: var(--el-menu-hover-bg-color);
  color: rgb(35, 118, 186);
}

.el-menu-item:first-child,
.el-menu-item:first-child:hover {
  font-size: 20px;
  background-color: rgb(35, 118, 186);
  color: white;
}
.el-menu-item-group {
  background-color: rgb(151, 35, 186);
}

.el-menu-item.is-active:not(:first-child) {
  color: rgb(35, 118, 186);
  background-color: var(--el-menu-hover-bg-color);
}
.el-menu-item [class^=el-icon] {
    margin-right: 10px;
}
</style>