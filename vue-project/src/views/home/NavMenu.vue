<template>
  <el-aside width="200px" class="aside">
    <el-menu default-active="/home" class="el-menu-vertical-demo" router>
      <el-menu-item :index="item.path" v-for="item in nav" :key="item.path">
        <el-icon><icon-menu /></el-icon>
        <span>{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
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
const store = mainStore()//实例化store
const { nav } = storeToRefs(store) //结构具有响应式的数据
</script>

<style lang="scss" scoped>
.aside {
  height: 100vh;
  background-color: rgb(35, 118, 186);
}

.el-menu {
  background-color: rgb(35, 118, 186);
  border: none;
}

.el-menu-item {
  color: white;
}

.el-menu-item:hover {
  background-color: var(--el-menu-hover-bg-color);
  color: rgb(35, 118, 186);
}

.el-menu-item-group {
  background-color: rgb(151, 35, 186);
}

.el-menu-item.is-active {
  color: rgb(35, 118, 186);
  background-color: var(--el-menu-hover-bg-color);
}
</style>