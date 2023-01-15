<template>
  <div class="index">
    <div class="good-header">
      <el-input @keyup.enter="search" @input="search" v-model="input" placeholder="请输入内容" />
      <el-button type="primary" @click="search">查询</el-button>
      <el-button type="primary" @click="addInfo">添加</el-button>
    </div>
    <el-backtop :right="100" :bottom="100" />
    <el-table :data="tableData" style="width: 100%" empty-text="暂无数据"
      :default-sort="{ prop: 'cid', order: 'ascending' }" height="80%" :row-style="iRowStyle">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="cid" label="商品ID" sortable />
      <el-table-column prop="title" label="商品名称" />
      <el-table-column prop="price" label="商品价格" sortable />
      <el-table-column prop="num" label="商品数量" sortable />
      <el-table-column prop="category" label="规格类目" />
      <el-table-column prop="image" label="商品图片" />
      <el-table-column prop="sellPoint" label="商品买点" />
      <el-table-column prop="descs" label="商品描述" />
      <el-table-column prop="address" label="操作">
        <template #default="scope">
          <el-button size="large" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="large" type="danger" @click="centerDialogVisible = true">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <el-dialog v-model="centerDialogVisible" title="警告提示" width="30%" center>
    <span>
      你确定要删除这一条数据吗？
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false,handleDelete()">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { mainStore } from '../../../../store';
const input = ref('')
const tableData = ref([])
const centerDialogVisible = ref(false)
//搜索
function search() {
  tableData.value = input.value ? tableData.value.filter(e => e.title.includes(input.value)) : mainStore().lists
}
//添加
function addInfo() {

}
//编辑数据
function handleEdit(index, row) {

}
//删除数据
function handleDelete(index, rows) {
  tableData.value.splice(index, 1)
}
function iRowStyle({ row, rowIndex }) {
  return 'height:90px';
}
onMounted(() => {
  tableData.value = mainStore().lists
})
</script>

<style lang="scss" scoped>
.index {
  height: 1000px;

  .good-header {
    display: flex;
    margin-bottom: 20px;

    button {
      margin-left: 20px;
    }
  }
}

.el-table tr {
  height: 100px;
}
</style>