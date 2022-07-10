import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
const Home = () => import('@/views/Home')
const List = () => import('@/views/List')
const News = () => import('@/views/News')
const My = () => import('@/views/My')
const Login = () => import('@/views/Login')
const City = () => import('@/views/City')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: 'home', component: Home },
      { path: 'list', component: List },
      { path: 'news', component: News },
      { path: 'my', component: My, name: 'my' }
    ]
  },
  { path: '/login', component: Login },
  { path: '/city', component: City }
]

const router = new VueRouter({
  routes
})

export default router
