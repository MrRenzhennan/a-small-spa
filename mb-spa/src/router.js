import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PurchaseMember from './views/purchase_member.vue'
// import MemberAppointment from './views/member_appointment.vue'
const MemberAppointment = () => import('./views/member_appointment.vue');
const ResearchActivities = () => import('./views/research_activities.vue');
const LocalNews = () => import('./views/local_news.vue');

const Login = () => import('./views/login.vue');//密码登陆
const CodeLogin = () => import('./views/code-login.vue');//验证码登陆
const Registered = () => import('./views/registered.vue');//注册
const ForgetPassword = () => import('./views/forget-password.vue');//忘记密码

//我的
const MyHome = () => import('./views/my-home.vue');//我的

const Setting = () => import('./views/setting.vue');//设置
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect:'/purchase_member',
      children: [
        {
          path: 'purchase_member',
          name:'purchase_member',
          component: PurchaseMember
        },
        {
          path: 'member_appointment',
          name:'member_appointment',
          component: MemberAppointment
        },
        {
          path: 'research_activities',
          name:'research_activities',
          component: ResearchActivities
        },
        {
          path: 'local_news',
          name:'local_news',
          component: LocalNews
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
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
  ]
})
