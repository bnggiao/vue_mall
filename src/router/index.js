import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/home')
const Cart = () => import('../views/cart/cart')
const Category = () => import('../views/category/category')
const Profile = () => import('../views/profile/profile')
const Detail = () => import('../views/detail/Detail')

Vue.use(VueRouter)

const routes = [
    { path: '', redirect: '/home' },
    { path: '/home', component: Home},
    { path: '/cart', component: Cart},
    { path: '/category', component: Category},
    { path: '/profile', component: Profile},
    { path: '/detail/:iid', component: Detail}
]

const router = new VueRouter({
    routes
})

export default router