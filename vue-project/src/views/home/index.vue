<template>
  <div>
    <el-container>
      <!-- 左侧导航 -->
      <NavMenu :isCollapse="isCollapse"/>
      <!-- 右侧主体 -->
      <el-container>
        <!-- 头部 -->
        <el-header>
          <el-radio-group v-model="isCollapse">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">闭合</el-radio-button>
          </el-radio-group>
          <el-button type="primary" @click="goBack">退出</el-button>
        </el-header>
        <!-- 主体 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import NavMenu from './NavMenu.vue';
import { useRouter } from 'vue-router'
import { mainStore } from '../../store';
import { ref } from 'vue';
const store = mainStore()
const router = useRouter()
function goBack() {
  store.deleteCacheAndToken()
  store.userName = ''
  router.push('/login')
}
const isCollapse = ref(false)
</script>

<style lang="scss" scoped>
.el-container {
  min-width: 500px;
  height: 100vh;
  .el-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: gainsboro;
    height: 56px;

    .text-style {
      font-size: 20px;
      font-weight: 600;
    }
  }
  .el-main{
    overflow: hidden;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>