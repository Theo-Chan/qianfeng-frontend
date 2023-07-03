<template>
  <div class="common-layout">
    <el-container>
      <el-header style="margin-bottom: 5px">
        <div class="11">
          <el-card shadow="always">查询条件</el-card>
        </div>
      </el-header>
      <el-main>
        <el-row :gutter="4" justify="space-between" style="max-width: 90%;margin: 20px" >
          <span >车牌号：</span>
          <el-input  placeholder="Please Input" style="width: 20%"/>
          <span>车辆类型：</span>
          <el-input  placeholder="Please Input" style="width: 20%"/>
          <span>车辆颜色：</span>
          <el-input  placeholder="Please Input" style="width: 20%"/>
        </el-row>
        <el-row :gutter="4" justify="space-around" style="max-width: 90%;margin: 20px">
          <span >车辆描述：</span>
          <el-input  placeholder="Please Input" style="width: 20%"/>
          <span>是否出租：</span>
          <div class="mb-2 flex items-center text-sm">
            <el-radio-group v-model="radio1" class="ml-4" >
              <el-radio label="1" size="large">已出租 </el-radio>
              <el-radio label="2" size="large">未出租</el-radio>
            </el-radio-group>
          </div>
          <div class="is-flex">
            <el-button type="primary" :icon="Search">Search</el-button>
            <el-button type="primary" :icon="Delete" />
          </div>
        </el-row>
        <div>
          <FormPage/>
        </div>
      </el-main>
    </el-container>
    </div>
</template>

<script setup lang="ts">
import FormPage from "../public/FormPage.vue";
import {ref} from "vue";
import {Delete, Search} from "@element-plus/icons-vue";
const radio1 = ref('1');
</script>

<style scoped>

</style>
