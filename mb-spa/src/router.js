import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

const MemberPurchaseInformation = () => import('./views/member-purchase-information.vue');//会员购买信息
const PurchaseSuccess = () => import('./views/purchase-success.vue');//购买成功

const AppointmentCourse = () => import('./views/appointment-course.vue');//预约场次

const Login = () => import('./views/login.vue');//密码登陆
const CodeLogin = () => import('./views/code-login.vue');//验证码登陆
const Registered = () => import('./views/registered.vue');//注册
const ForgetPassword = () => import('./views/forget-password.vue');//忘记密码


const MyHome = () => import('./views/my-home.vue');//我的
const Setting = () => import('./views/setting.vue');//设置

const MyIncome = () => import('./views/my-income.vue');//我的收益
const MyLink = () => import('./views/my-link.vue');//我的专属链接
const MyCode = () => import('./views/my-code.vue');//我的专属二维码

const AddressMy = () => import('./views/address-my.vue');//我的地址
const AddressSetting = () => import('./views/address-setting.vue');//设置地址
const ServiceAgreement = () => import('./views/service-agreement.vue');//服务协议
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/member-purchase-information',
      name: 'member-purchase-information',
      component: MemberPurchaseInformation,
    },
    {
      path: '/purchase-success',
      name: 'purchase-success',
      component: PurchaseSuccess,
    },
    {
      path: '/appointment-course',
      name: 'appointment-course',
      component: AppointmentCourse,
    },
    {
      path: '/code-login',
      name: 'code-login',
      component: CodeLogin,
    },
    {
      path: '/registered',
      name: 'registered',
      component: Registered,
    },
    {
      path: '/forget_password',
      name: 'forget_password',
      component: ForgetPassword,
    },
    {
      path: '/my-home',
      name: 'my-home',
      component: MyHome,
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting,
    },
    {
      path: '/my-income',
      name: 'my-income',
      component: MyIncome,
    },
    {
      path: '/my-link',
      name: 'my-link',
      component: MyLink,
    },
    {
      path: '/my-code',
      name: 'my-code',
      component: MyCode,
    },
    {
      path: '/address-my',
      name: 'address-my',
      component: AddressMy,
    },
    {
      path: '/address-setting',
      name: 'address-setting',
      component: AddressSetting,
    },
    {
      path: '/service-agreement',
      name: 'service-agreement',
      component: ServiceAgreement,
    },
  ]
})
