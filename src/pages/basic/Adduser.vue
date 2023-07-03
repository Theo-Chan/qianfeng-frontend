<template>
  <el-row :gutter="4" justify="space-between" style="max-width: 90%;margin: 20px" >
    <span >客户姓名：</span>
    <el-input v-model="addUser.cusName"  placeholder="Please Input" style="width: 20%"/>
    <span>职业：</span>
    <el-input v-model="addUser.career" placeholder="Please Input" style="width: 20%"/>
    <span>用户地址：</span>
    <el-input v-model="addUser.address" placeholder="Please Input" style="width: 20%"/>
  </el-row>
  <el-row :gutter="4" justify="space-between" style="max-width: 90%;margin: 20px">
    <span >用户电话：</span>
    <el-input v-model="addUser.phone" placeholder="Please Input" style="width: 20%"/>
    <span>身份证号：</span>
    <el-input v-model="addUser.identity" placeholder="Please Input" style="width: 20%"/>
    <span>性别：</span>
    <div class="mb-2 flex items-center text-sm">
      <el-radio-group v-model="addUser.gender" class="ml-4" >
        <el-radio label="1" size="large">男 </el-radio>
        <el-radio label="0" size="large">女</el-radio>
      </el-radio-group>
    </div>
    <div class="is-flex">
      <el-button type="primary" :icon="Search" @click="doadd">提交</el-button>
    </div>
  </el-row>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {Delete, Search} from "@element-plus/icons-vue";
import myaxios from "../../plugins/myaxios";

const addUser = ref({
  address:null,
  career:null,
  cusName:null,
  gender:0,
  identity:null,
  phone:null
})
const doadd =async () =>{
  const res = await myaxios.post('customer/add',{
    address:addUser.value.address,
    career:addUser.value.career,
    cusName:addUser.value.cusName,
    gender:addUser.value.gender,
    identity:addUser.value.identity,
    phone:addUser.value.phone,
  })
if (res.code == 0 && res.data )
{
  console.log(res.data)
}
}
</script>

<style scoped>

</style>
