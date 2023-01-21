<template>
  <div class="index">
    <!-- 查询 -->
    <div class="good-header">
      <el-input @keyup.enter="search" v-model="input" placeholder="请输入商品名称" />
      <el-button type="primary" @click="search">查询</el-button>
      <el-button type="primary" @click="addInfo">添加</el-button>
      <el-button type="primary" @click="toggleSelection(tableDatas)">全选</el-button>
      <el-button type="primary" @click="toggleSelection()">取消</el-button>
      <el-button type="primary" @click="toggelDelete()">删除</el-button>
    </div>
    <!-- table -->
    <div class="table-style">
      <el-table :data="tableDatas" style="width: 100%" empty-text="暂无数据" ref="multipleTableRef" @select-all="selectAll"
        :default-sort="{ prop: 'cid', order: 'ascending' }" height="100%" :row-style="iRowStyle" @select="selectData">
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
            <el-button size="large" type="danger"
              @click="centerDialogVisible = true, handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 修改框 -->
    <el-dialog v-model="outerVisible" title="添加商品">
      <template #default>
        <el-dialog width="30%" title="Inner Dialog" append-to-body />
        <el-form :model="form" label-width="120px">
          <el-form-item label="类目选择">
            <el-button type="primary" @click="innerVisible = true">类目选择</el-button>
          </el-form-item>
          <el-form-item label="商品名称">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="商品价格">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="商品数量">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="商品买点">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="商品图片">
            <el-button type="primary">上传图片</el-button>
          </el-form-item>
          <el-form-item label="商品描述">
            <div style="border: 1px solid #dcdfe6;width: 100%;border-radius: 4px;">
              <toolbar style="border-bottom: 1px solid #dcdfe6;width: 100%;border-radius: 4px;" :editor="editorRef"
                :default-config="toolbarConfig" mode="default" />
              <editor v-model="form.noticeContent" style="height: 300px; overflow-y: hidden;"
                :default-config="editorConfig" mode="default" @onCreated="onCreated" />
            </div>
          </el-form-item>
        </el-form>
      </template>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="outerVisible = false">取消</el-button>
          <el-button type="primary" @click="innerVisible = true">
            确认
          </el-button>
        </div>
      </template>
    </el-dialog>
    <!-- 分页 -->
    <el-pagination background layout="total, prev, pager, next" :total="total" :page-size="pageSize"
      @current-change="handleCurrentChange" :default-current-page="1" />
  </div>
  <!-- 嵌套弹框 -->
  <el-dialog v-model="innerVisible" width="30%" title="类目选择" top="200px" append-to-body>
    <el-tree :data="tree" :props="defaultProps" @node-click="handleNodeClick" />
    <el-button @click="outerVisible = false">取消</el-button>
    <el-button type="primary" @click="innerVisible = true">
      确认
    </el-button>
  </el-dialog>
</template>

<script setup>
import { onMounted, ref, reactive, shallowRef, nextTick, watchEffect } from 'vue';
import { mainStore } from '../../../../store';
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { ElMessage, ElMessageBox } from 'element-plus'

// 菜单配置 && 富文本
const editorRef = shallowRef()
const toolbarConfig = ref({})
//const noticeContent = reactive({})
//类目选择
const tree = [
  {
    label: '家具/家居',
    children: [
      {
        label: '家具',
        children: [
          {
            label: '洗衣机',
          },
        ],
      },
      {
        label: '家居',
        children: [
          {
            label: '电热毯',
          },
        ],
      },
    ],
  },
  {
    label: '手机',
    children: [
      {
        label: '高档机',
        children: [
          {
            label: '小米',
          },
        ],
      },
      {
        label: '中档机',
        children: [
          {
            label: '华为',
          },
        ],
      },
    ],
  },
  {
    label: '电脑',
    children: [
      {
        label: '高端',
        children: [
          {
            label: '小米',
          },
        ],
      },
      {
        label: '中端',
        children: [
          {
            label: '华为',
          },
        ],
      },
    ],
  },
]
//修改form
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
  noticeContent: ''
})
//嵌套login框
const innerVisible = ref()
const input = ref('')
//接受过来的总数据
const tableData = ref([])
//每一页的数据展示根据pagesize控制
const tableDatas = ref([])
//true时,对话框弹出
const centerDialogVisible = ref(false)
//页码的总数据
const total = ref()
//每一页的数据量
const pageSize = ref()
const indexValue = ref(1)
const outerVisible = ref(false)
const multipleTableRef = ref()
let searchList = ref([])
//选中的单选框
const selectRadio = reactive([])
//删除单选框
function toggelDelete() {
  selectRadio.value.forEach(e => {
    tableData.value.splice(tableData.value.findIndex(i => i == e), 1)
  })
  input.value ? haveInputValue() : noInputValue()
}
//单选框数组
function selectData(sel, row) {
  selectRadio.value = sel
}
//全选单选框
function selectAll(select) {
  selectRadio.value = select
}
//复选框
const onCreated = (editor) => {
  editorRef.value = editor
  nextTick(() => {
    editorRef.value = editor // 一定要用 Object.seal() ，否则会报错
  })
}
//input有值
function haveInputValue() {
  searchList.value = filterData()
  if (indexValue.value == 1) {
    tableDatas.value = searchList.value.slice(0, pageSize.value)
    total.value = searchList.value.length
  } else {
    tableDatas.value = searchList.value.slice((indexValue.value - 1) * pageSize.value, ((indexValue.value - 1) * pageSize.value) * 2)
    total.value = searchList.value.length
  }
}
//input无值
function noInputValue() {
  if (indexValue.value == 1) {
    tableDatas.value = tableData.value.slice(0, pageSize.value)
    total.value = tableData.value.length
  } else {
    tableDatas.value = tableData.value.slice((indexValue.value - 1) * pageSize.value, ((indexValue.value - 1) * pageSize.value) * 2)
    total.value = tableData.value.length
  }
}
//全选按钮
const toggleSelection = (rows) => {
  if (rows) {
    rows.forEach(row => {
      multipleTableRef.value.toggleRowSelection(row);
    });
  } else {
    multipleTableRef.value.clearSelection();
  }
}
//搜索
function search() {
  if (input.value) {
    tableDatas.value = filterData(input.value)
    total.value = filterData(input.value).length
    handleCurrentChange(indexValue.value)
  } else {
    total.value = tableData.value.length
    tableDatas.value = tableData.value.slice(0, pageSize.value)
  }
}
//添加
function addInfo() {
  outerVisible.value = true
}
//编辑数据
function handleEdit(index, row) {
}
//删除数据
function handleDelete(index, row) {
  ElMessageBox.confirm(
    '此操作将永久删除该文件，是否继续?',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      if (input.value) {
        tableData.value.splice(tableData.value.findIndex(e => e == row), 1)
        tableDatas.value.splice(index, 1)
        haveInputValue()
      } else {
        tableData.value.splice(tableData.value.findIndex(e => e == row), 1)
        tableDatas.value.splice(index, 1)
        noInputValue()
      }
      ElMessage({
        type: 'success',
        message: '删除成功',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消删除',
      })
    })
}
//页码事件
const handleCurrentChange = (val) => {
  indexValue.value = val
  if (input.value) {
    haveInputValue()
  } else {
    noInputValue()
  }
}
//过滤元素
function filterData() {
  return tableData.value.filter(e => e.title.includes(input.value))
};
onMounted(() => {
  tableData.value = mainStore().lists
  pageSize.value = mainStore().nums.pageSize
  total.value = tableData.value.length
  tableDatas.value = tableData.value.slice(0, pageSize.value)
})
/* function onEditorBlur() { }
function onEditorFocus() { }
function onEditorChange() { }
function saveHtml(event) { } */
//tr高度
function iRowStyle({ index, rowIndex }) {
  return 'height:66px';
}
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

.table-style {
  height: 70%;
}

.el-pagination {
  justify-content: flex-end;
  margin-top: 10px;
}
</style>