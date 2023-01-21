<template>
  <div>
    <el-container>
      <!-- 左侧导航 -->
      <NavMenu :isCollapse="isCollapse" />
      <!-- 右侧主体 -->
      <el-container>
        <!-- 头部 -->
        <el-header>
          <el-icon color="white" size="35px" v-if="!isCollapse" @click="isCollapse = !isCollapse">
            <Fold />
          </el-icon>
          <el-icon color="white" size="35px" v-else="isCollapse" @click="isCollapse = !isCollapse">
            <Expand />
          </el-icon>
          <div>
            <el-button type="primary" @click.prevent="this.$router.go(0)">刷新</el-button>
            <el-button type="primary" @click="goBack">退出</el-button>
          </div>
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
    background-color: #1574C2;
    height: 56px;

    .text-style {
      font-size: 20px;
      font-weight: 600;
    }
  }

  .el-main {
    overflow: hidden;
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-icon {
  cursor: pointer;
}
</style>