<template>
  //固定列和
  <el-row justify="space-between">
    <div>
      <el-button type="primary">添加</el-button>
      <el-button type="danger">批量删除</el-button>
    </div>
    <el-button-group class="ml-4">
<!--      筛选列 todo 绑定表格事件-->
      <el-popover placement="bottom-end" :width="100" trigger="hover">
        <template #reference>
          <el-button type="primary" :icon="Edit"  title="筛选列"/>
        </template>
        <el-table :data="tableHead" >
          <el-table-column type="selection" property="选择" width="30"  />
<!--          todo property 改成是父组件传过来的tableHead name-->
          <el-table-column width="100" property="name"  />
        </el-table>
      </el-popover>
      <el-button type="primary" :icon="Film" title="导出"/>
      <el-button type="primary" :icon="Printer" title="打印"/>
    </el-button-group>
  </el-row>
<div id="fromMain">
  <el-table :data="tableDataFromFather" max-height="450">
    <el-table-column fixed="left" type="selection"/>
    <el-table-column v-for="item in tableHead" :key="item.id" :prop="item.id" :label="item.name"></el-table-column>
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default>
        <el-button link type="primary" size="small" @click="handleClick"
        >编辑</el-button
        >
        <el-button link type="primary" size="small">删除</el-button>
      </template>
    </el-table-column>

  </el-table>
  <div id="formChild">
    <!--    分页组件-->
    <el-pagination
        v-model:current-page="currentPage1"
        :page-size="10"
        layout="total, prev, pager, next"
        :total="1000"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        style="margin-top: 20px"
    />
  </div>

</div>

</template>

<script setup lang="ts">
import {ref} from "vue";
import user from "../System management/User.vue";
import {Delete, Edit, Film, Printer, Share} from "@element-plus/icons-vue";
const handleClick = () => {
  console.log('click')
}
// 1.请求接口拿到数据
// 2.将数据存到MockData中
// 3.动态渲染
const MockData = ref([])

// 分页逻辑
const currentPage1 = ref(5)
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

// 模拟父组件传来的数据
const tableHead= [
  {
    id:'id',
    name:'身份证'
  },
  {
    id:'name',
    name:'姓名'
  },
  {
    id:'location',
    name:'地址'
  },
  {
    id:'tel',
    name:'电话'
  },
]
const tableDataFromFather = [
  {
    id:'123',
    name:'chan',
    location:'daz',
    tel:'123434'
  },
  {
    id:'1234',
    name:'ying',
    location:'dwez',
    tel:'123eqer4'
  },
  {
    id:'1234',
    name:'ying',
    location:'dwez',
    tel:'123eqer4'
  },
  {
    id:'1234',
    name:'ying',
    location:'dwez',
    tel:'123eqer4'
  },

]

  // {
  //   date: '2016-05-07',
  //   name: 'Tom',
  //   state: 'California',
  //   city: 'Los Angeles',
  //   address: 'No. 189, Grove St, Los Angeles',
  //   zip: 'CA 90036',
  // },]


</script>

<style scoped>
#fromMain{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
