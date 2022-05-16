import axios from 'axios'
export function request(config){
    // 使用axios.create创建请求函数
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/hy66',
        timeout: 5000
    })

    // 请求拦截,参数：(成功拦截函数【必须返回拦截成功的值否则无法执行请求】,拦截失败函数)
    instance.interceptors.request.use(config => {
        return config
    },err => {
        console.log(err);
    })

    // 响应拦截，参数：(成功拦截函数【必须返回拦截成功的值否则无法执行请求】,拦截失败函数)
    instance.interceptors.response.use(res => {
        // 返回data就行
        return res.data
    },err => {
        console.log(err);
    })
    //因为执行axios 会返回Promise，所以我们直接返回就行
    return instance(config)
}