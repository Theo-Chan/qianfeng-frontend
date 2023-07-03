
import FormPage from "../pages/public/FormPage.vue";
import CarManagement from "../pages/basic/CarManagement.vue";
import CustomerManagement from "../pages/basic/CustomerManagement.vue";
import CarInLoad from "../pages/Business management/CarInLoad.vue";
import CheckBill from "../pages/Business management/CheckBill.vue";
import RentBill from "../pages/Business management/RentBill.vue";
import RentCar from "../pages/Business management/RentCar.vue";
import Annual from "../pages/Statistical analysis/Annual.vue";
import CustomerArea from "../pages/Statistical analysis/CustomerArea.vue";
import Staff from "../pages/Statistical analysis/Staff.vue";
import Log from "../pages/System management/Log.vue";
import Menu from "../pages/System management/Menu.vue";
import Role from "../pages/System management/Role.vue";
import User from "../pages/System management/User.vue";
import Blank from "../pages/basic/Blank.vue";
import notfound from "../pages/404/notfound.vue";
import LogIn from "../pages/404/LogIn.vue";
import Index from "../pages/index.vue";
import Adduser from "../pages/basic/Adduser.vue";
const routes = [
    // {
    //     path:"/",
    //     component:App,
    //     meta:{title : '首页'}
    // },
    {
        path:"/",
        name:"登录页",
        component:LogIn
    },
    {
        path:"/index",
        name:"主页",
        component:Index,
        children: [
            {
                path:"/basic/formpage",
                component:FormPage
            },
            {
                path:"/basic/carmanagement",
                component:CarManagement,
                meta:{title : '车辆管理'}
            },
            {
                path:"/basic/customermangement",
                component:CustomerManagement,
                meta:{title : '用户管理'}
            },
            {
                path:"/business/carinload",
                component:CarInLoad,
                meta:{title : '汽车入库'}
            },
            {
                path:"/business/checkbill",
                component:CheckBill,
                meta:{title : '检查订单'}
            },
            {
                path:"/business/rentbill",
                component:RentBill,
                meta:{title : '租车账单'}
            },
            {
                path:"/business/rentcar",
                component:RentCar,
                meta:{title : '租车'}
            },
            {
                path:"/Statistical/annual",
                component:Annual,
                meta:{title : '年度销售额'}
            },
            {
                path:"/Statistical/customerarea",
                component:CustomerArea,
                meta:{title : '客户地区'}
            },
            {
                path:"/Statistical/Staff",
                component:Staff,
                meta:{title : '员工信息'}
            },
            {
                path:"/system/log",
                component:Log,
                meta:{title : '日志信息'}
            },
            {
                path:"/system/menu",
                component:Menu,
                meta:{title : '菜单管理'}
            },
            {
                path:"/system/role",
                component:Role,
                meta:{title : '角色管理'}
            },
            {
                path:"/system/user",
                component:User,
                meta:{title : '用户管理'}
            },
            {
                path:"/blank",
                component:Blank,
                meta:{title : '空'}
            },
            { path: '/:pathMatch(.*)*',
                name: 'NotFound',
                component: notfound
            },
            {
                path:"/adduser",
                component:Adduser,
                meta:{title : '空'}
            },
        ]
    },


]

export default routes;
