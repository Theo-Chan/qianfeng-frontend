
import axios,{AxiosInstance} from "axios";

const myAxios:AxiosInstance = axios.create({
    // todo 后端api地址a
    baseURL:"http://localhost:8080/api"
});
// 添加携带cookie的配置
myAxios.defaults.withCredentials = true;
// 添加请求拦截器
myAxios.interceptors.request.use(function (config) {
    console.log("发送请求",config)
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
myAxios.interceptors.response.use(function (response) {
    console.log("响应",response)
    // 对响应数据做点什么
    //todo  返回结构
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default myAxios;
