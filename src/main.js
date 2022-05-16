import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import toast from './components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

// 创建事件总线原型
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

// 安装弹窗
Vue.use(toast)

// 安装图片懒加载
Vue.use(VueLazyLoad, {
  // 设置占位图片
  loading: require('./assets/img/common/placeholder.png')
})

// 解决移动端300毫秒延迟
FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

