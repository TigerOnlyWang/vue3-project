<template>
  <div>
    <el-container>
      <!-- 左侧导航 -->
      <NavMenu />
      <!-- 右侧主体 -->
      <el-container>
        <!-- 头部 -->
        <el-header>
            <p class="text-style">欢迎回来!</p>
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
const router = useRouter()
function goBack() {
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: gainsboro;

  .text-style {
    font-size: 20px;
    font-weight: 600;
  }
}
</style>