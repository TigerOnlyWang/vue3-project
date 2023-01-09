<template>
      <el-aside width="200px" class="aside">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            router
        >
            <el-menu-item :index="item.path" v-for="item in items" :key="item.path" >
              <el-icon><icon-menu /></el-icon>
              <span>{{ item.title }}</span>
            </el-menu-item>
        </el-menu>
      </el-aside>
</template>

<script setup>
import { ref , onMounted} from 'vue';
import { getNavData } from '../../api/api';
const items = ref([])
onMounted(async ()=>{
  let {data} = await getNavData()
  items.value = data.info.res
})
</script>

<style lang="scss" scoped>
.aside{
  height: 100vh;
  background-color: rgb(35, 118, 186);
}
.el-menu{
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
.el-menu-item-group{
  background-color: rgb(151, 35, 186);
}
.el-menu-item.is-active {
    color: rgb(35, 118, 186);
    background-color:var(--el-menu-hover-bg-color);
}
</style>