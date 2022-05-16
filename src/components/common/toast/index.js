import Toast from './Toast.vue'
const obj = {}
// 用vue.use 安装的时候会执行install函数，同时传vue过来
obj.install = function(Vue){
    // 1.创建构造器
    const toastContrustor = Vue.extend(Toast)
    // 2.new根据构造器，可以创建出一个组件对象
    const toast = new toastContrustor()
    // 3.将组件挂载到元素上
    toast.$mount(document.createElement('div'))
    // 4.添加到body，toast的$el 就是div
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast = toast
}
export default obj