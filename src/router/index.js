import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
const Home = () => import('@/views/Home')
const Room = () => import('@/views/Room')
const My = () => import('@/views/My')
const New = () => import('@/views/New')
const Login = () => import('@/views/Login')
const Collect = () => import('@/views/Collect')
const Rent = () => import('@/views/Rent')
const Register = () => import('@/views/Register')
const City = () => import('@/views/City')
const Release = () => import('@/views/Release')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: 'home', component: Home },
      { path: 'room', component: Room },
      { path: 'my', component: My },
      { path: 'new', component: New }
    ]
  },
  {
    path: '/login', component: Login
  },
  {
    path: '/collect', component: Collect
  },
  {
    path: '/rent', component: Rent
  },
  {
    path: '/register', component: Register
  },
  {
    path: '/city', component: City
  },
  {
    path: '/release', component: Release
  }

]

const router = new VueRouter({
  routes
})

export default router
