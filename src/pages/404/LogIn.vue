<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../../assets/vue.svg" alt="" />
      </div>
      <!-- 登录表单区域 -->
      <el-form label-width="0px" class="login_form">
        <!-- 用户名 -->
        <el-form-item>
          <el-input :prefix-icon="Avatar" placeholder="用户名" v-model="userName"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input :prefix-icon="Lock" placeholder="密码" v-model="userPassWord" show-password ></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item class="avatarbox">
          <span>验证码：</span>
          <el-input style="height: 36px;margin-bottom: 5px" v-model="checkCode"></el-input>
          <img :src="getCodeUrl" alt="验证码" @click="doChange()" style="width:116px;height: 36px " >
        </el-form-item>
        <!-- 按钮区域 -->
        <el-row justify="end">
          <el-form-item class="login_btn">
            <el-button type="primary" @click="doLogIn">登录</el-button>
            <el-button type="info" @click="doClear">重置</el-button>
          </el-form-item>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";

import myAxios from "../../plugins/myaxios.ts";
import * as http from "http";
import {Avatar,Lock} from "@element-plus/icons-vue";
import myaxios from "../../plugins/myaxios";
import {useRouter} from "vue-router";
import {setCurrentUserState} from "../../states/userState.ts";
const router = useRouter();
const userName = ref('')
const userPassWord = ref('')
const checkCode = ref('')
const getCodeUrl = ref('http://localhost:8080/api/user/getcode')
const userData = ref()
const doChange = () =>{
  getCodeUrl.value = 'http://localhost:8080/api/user/getcode?'+ Math.random();
  console.log("1")
}
const doClear = () =>{
  userName.value = '';
  userPassWord.value = '';
  checkCode.value = '';
}
// todo 用户登录结果反馈
const doLogIn =async () =>{
  const res = await myaxios.post('/user/login', {
    code: checkCode.value,
    loginName:userName.value,
    userPassword: userPassWord.value
  })
  if (res.code === 0 && res.data)
  {
     setCurrentUserState(res.data)
    await router.push(
      '/index'
    )
  }
}


</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100vh;
}
.login_box {
  // 宽450像素
  width: 450px;
  // 高300像素
  height: 400px;
  // 背景颜色
  background-color: #fff;
  // 圆角边框3像素
  border-radius: 3px;
  // 绝对定位
  position: absolute;
  // 距离左则50%
  left: 50%;
  // 上面距离50%
  top: 50%;
  // 进行位移，并且在横轴上位移-50%，纵轴也位移-50%
  transform: translate(-50%, -50%);
  .avatar_box {
    // 盒子高度130像素
    height: 130px;
    // 宽度130像素
    width: 130px;
    // 边框线1像素 实线
    border: 1px solid #eee;
    // 圆角
    border-radius: 50%;
    // 内padding
    padding: 10px;
    // 添加阴影 向外扩散10像素 颜色ddd
    box-shadow: 0 0 10px #ddd;
    // 绝对定位
    position: absolute;
    // 距离左则
    left: 50%;
    // 位移
    transform: translate(-50%, -50%);
    // 背景
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.login_btn {
  // 设置弹性布局
  display: flex;
  // 横轴上尾部对齐
  justify-content: flex-end;
}
</style>
