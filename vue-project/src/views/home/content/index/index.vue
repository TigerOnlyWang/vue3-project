<template>
  <div class="index">
    <div class="good-header">
      <el-input @keyup.enter="search" v-model="input" placeholder="请输入内容" />
      <el-button type="primary" @click="search">查询</el-button>
      <el-button type="primary" @click="addInfo">添加</el-button>
    </div>
    <el-backtop :right="100" :bottom="100" />
    <div>
      其他内容
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const input = ref('')
//搜索
function search() {
  console.log(input.value);
}
//添加
function addInfo() {

}
</script>

<style lang="scss" scoped>
.index{
  height: 1000px;
  .good-header {
  display: flex;
  margin-bottom: 20px;

  button {
    margin-left: 20px;
  }
}
}

</style>