<template>
  <div class="common-layout">
    <el-container>
      <el-header style="margin-bottom: 5px">
        <div class="11">
          <el-card shadow="always">查询条件</el-card>
        </div>
      </el-header>
      <el-main>
        <el-row :gutter="4"  style="max-width: 90%;margin: 20px">
          <span>身份证号：</span>
          <el-input  placeholder="Please Input" style="width: 20%"/>
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
const radio1 = ref(1)
</script>

<style scoped>

</style>
