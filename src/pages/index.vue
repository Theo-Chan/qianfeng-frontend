  <template>
    <div class="common-layout" style="max-height: 100%;overflow: hidden">
      <el-container>
        <el-header style="padding: 0;border-bottom: 0">
          <!--  顶栏-->
          <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              :ellipsis="false"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
          >
            <el-menu-item index="0" @click="backToHome()">
              汽车管理
            </el-menu-item>

              <span style="margin: 12px auto;">
                <el-switch
                    v-model="isCollapse"
                    class="mt-2"
                    style="margin-left: 24px"
                    inline-prompt
                    :active-icon="Check"
                    :inactive-icon="Close"
                />
              </span>
            <div class="flex-grow" />
            <el-menu-item index="2">清除缓存</el-menu-item>
            <el-menu-item index="3">锁屏</el-menu-item>
            <el-sub-menu index="4">
              <template #title>{{userData.realName}}</template>
              <el-menu-item index="2-4-1" @click="">个人资料</el-menu-item>
              <el-menu-item index="2-4-2">修改密码</el-menu-item>
              <el-menu-item index="2-4-3">系统公告</el-menu-item>
              <el-menu-item index="2-4-4">功能设定</el-menu-item>
              <el-menu-item index="2-4-5">更换皮肤</el-menu-item>
              <el-menu-item index="2-4-6">退出</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-header>
        <el-container >

<!--          <el-aside :width="isCollapse ?'64px':'200px'" style="background-color: #545c64;">-->
          <el-aside width="auto" style="background-color: #545c64;max-width: 180px;overflow: hidden">
            <el-col>
              <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  :collapse="isCollapse"
                  @open="handleOpen"
                  @close="handleClose"
                  :router="true"
                  background-color="#545c64"
                  text-color="#fff"
              >
                <!--            折叠开关-->

                <el-menu-item index="/blank" >
                  <el-icon><house/></el-icon>
                  <template #title>后台首页</template>
                </el-menu-item>
                <el-sub-menu index="2">
                  <template #title>
                    <el-icon><Grid /></el-icon>
                    <span>基础管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/basic/customermangement"><el-icon><User /></el-icon> 客户管理</el-menu-item>
                    <el-menu-item index="/basic/carmanagement"><el-icon><Van /></el-icon>车辆管理</el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu>
                <el-sub-menu index="3">
                  <template #title>
                    <el-icon><Postcard /></el-icon>
                    <span>业务管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/business/rentcar"><el-icon><DArrowRight /></el-icon>汽车出租</el-menu-item>
                    <el-menu-item index="/business/rentbill"><el-icon><Checked /></el-icon>出租单管理</el-menu-item>
                    <el-menu-item index="/business/carinload"><el-icon><DArrowLeft /></el-icon>汽车入库</el-menu-item>
                    <el-menu-item index="/business/checkbill"><el-icon><Postcard /></el-icon>检查单管理</el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu>
                <el-sub-menu index="4">
                  <template #title>
                    <el-icon><SetUp /></el-icon>
                    <span>系统管理</span>
                  </template>
                  <el-menu-item-group>
                    <template #title><span>Group One</span></template>
                    <el-menu-item index="/system/menu"><el-icon><Menu /></el-icon>菜单管理</el-menu-item>
                    <el-menu-item index="/system/role"><el-icon><Avatar /></el-icon>角色管理</el-menu-item>
                    <el-menu-item index="/system/user"><el-icon><User /></el-icon>用户管理</el-menu-item>
                    <el-menu-item index="/system/log"><el-icon><Notebook /></el-icon>日志管理</el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu>
                <el-sub-menu index="5">
                  <template #title>
                    <el-icon><Platform /></el-icon>
                    <span>统计分析</span>
                  </template>
                  <el-menu-item-group>
                    <template #title><span>Group One</span></template>
                    <el-menu-item index="/Statistical/customerarea"><el-icon><MapLocation /></el-icon>客户地区统计</el-menu-item>
                    <el-menu-item index="/Statistical/annual"><el-icon><OfficeBuilding /></el-icon>公司年度月份销售额</el-menu-item>
                    <el-menu-item index="/Statistical/Staff"><el-icon><WalletFilled /></el-icon>业务员年度销售额</el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu>
              </el-menu>
            </el-col>
          </el-aside>
          <el-main style="padding:0;height: 100%;overflow: hidden" >
              <router-view/>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>

<script setup lang="ts">
import {
  House,
  User,
  Van,
  DArrowRight,
  DArrowLeft,
  Checked,
  Postcard,
  Grid,
  Avatar,
  Notebook,
  MapLocation,
  WalletFilled,
  OfficeBuilding,
  Platform,
  Check,
  Close, SetUp,
} from '@element-plus/icons-vue'
import { ref } from 'vue'
import {useRoute} from "vue-router";
import {getCurrentUserState} from "../states/userState";
const route = useRoute()
const isCollapse = ref(false)
const userData = getCurrentUserState()
console.log("user",userData)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
// 开关
const value2 = ref(true)
console.log(value2.value)
const backToHome = () =>{
  route.push('/blank')
}
console.log(route)
</script>

<style scoped>

.flex-grow {
  flex-grow: 1;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
