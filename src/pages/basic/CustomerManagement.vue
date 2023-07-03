<template>
  <div class="common-layout">
    <el-container>
      <el-header style="margin-bottom: 5px">
        <div class="11" >
          <el-card shadow="always">查询条件</el-card>
        </div>
      </el-header>
      <el-main>
        <el-row :gutter="4" justify="space-between" style="max-width: 90%;margin: 20px" >
        <span >客户姓名：</span>
        <el-input v-model="name.cusName"  placeholder="Please Input" style="width: 20%"/>
        <span>职业：</span>
        <el-input v-model="name.career" placeholder="Please Input" style="width: 20%"/>
        <span>用户地址：</span>
        <el-input v-model="name.address" placeholder="Please Input" style="width: 20%"/>
      </el-row>
        <el-row :gutter="4" justify="space-between" style="max-width: 90%;margin: 20px">
          <span >用户电话：</span>
          <el-input v-model="name.phone" placeholder="Please Input" style="width: 20%"/>
          <span>身份证号：</span>
          <el-input v-model="name.identity" placeholder="Please Input" style="width: 20%"/>
          <span>性别：</span>
          <div class="mb-2 flex items-center text-sm">
            <el-radio-group v-model="name.gender" class="ml-4" >
              <el-radio label="1" size="large">男 </el-radio>
              <el-radio label="0" size="large">女</el-radio>
            </el-radio-group>
          </div>
          <div class="is-flex">
            <el-button type="primary" :icon="Search" @click="doSearch">Search</el-button>
            <el-button type="primary" :icon="Delete" />
          </div>
        </el-row>
<!--        <div style="max-height: 100%;overflow: hidden">
          <FormPage :tableHead="tableHead" :tableDataFromFather="tableDataFromFather"/>
        </div>-->
          //固定列
          <el-row justify="space-between">
            <div>
              <el-button type="primary" @click="doAdd">添加</el-button>
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
      </el-main>
    </el-container>
  </div>

</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import FormPage from "../public/FormPage.vue";
import {Delete, Edit, Film, Printer, Search} from "@element-plus/icons-vue"
import myaxios from "../../plugins/myaxios";
import {useRouter} from "vue-router";
import myAxios from "../../plugins/myaxios";
const tableDataFromFather = ref([])
const router = useRouter()
const name = ref({
  cusName:null,
  career:null,
  address:null,
  phone:null,
  identity:null,
  gender:1,
})
const doSearch = async ()=>{
  if (name.value.cusName == '') {
    name.value.cusName = null
  }
  if (name.value.career == '') {
    name.value.career = null
  }
  if (name.value.address == '') {
    name.value.address = null
  }
  if (name.value.phone == '') {
    name.value.phone = null
  }
  if (name.value.identity == '') {
    name.value.identity = null

  }
  const res = await myaxios.get('/customer/list/page',{
    params:{
      cusName:name.value.cusName,
      career:name.value.career,
      address:name.value.address,
      phone:name.value.phone,
      identity:name.value.identity,
      gender:name.value.gender,
    }
  })
  if (res.code === 0 && res.data )
  {
    // 拿数据
    tableDataFromFather.value = res.data.records
    console.log(res);
    console.log('records',tableDataFromFather.value)
  }

onMounted(doSearch)
}



const doAdd = async () =>{
  router.push('/adduser')
}
const handleClick = () => {
  console.log('click')
}
const MockData = ref([])
// 分页逻辑
const currentPage1 = ref(5)
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)

}
const tableHead = [
  {
    id:'identity',
    name:'身份证'
  },
  {
    id:"cusName",
    name:"客户姓名"
  },
  {
    id:"career",
    name:"客户职业"
  },
  {
    id:"phone",
    name:"客户电话"
  },
  {
    id:"gender",
    name:"性别"
  },
  {
    id:"createTime",
    name:"录入时间"
  }
]
</script>

<style scoped>
#fromMain{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
