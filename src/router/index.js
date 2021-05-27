import Vue from 'vue'
import VueRouter from 'vue-router'

//安装
Vue.use(VueRouter)

//懒加载
const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const Category = () => import('views/category/Category')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')

//配置路由信息
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 处理重复点击导航出错
// call() 提供新的 this 值给当前调用的函数/方法
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(res) {
  return originalReplace.call(this, res).catch(err => err)
}
export default router