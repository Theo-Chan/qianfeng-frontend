<template>
  <div>
    <div class="content-title-box">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{path:'/blank'}">首页</el-breadcrumb-item>
        <template >
          <el-breadcrumb-item v-for="item in routers" :key="item.path" >
            {{item.title}}1
          </el-breadcrumb-item>
        </template>
      </el-breadcrumb>
    </div>
    <div class="content-container-box">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {useRouter} from "vue-router";
const route = useRouter()
const routers = router.currentRoute.value.meta
console.log(router.currentRoute.value.meta)
</script>

<style scoped>
.border{
  width: 100%;
  height: 0;
  border-top: 1px solid var(--el-border-color);
}

</style>
