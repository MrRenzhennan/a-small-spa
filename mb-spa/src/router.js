import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import PurchaseMember from "@/views/purchase_member.vue";
const MemberAppointment = () => import("@/views/member_appointment.vue");
const ResearchActivities = () => import("@/views/research_activities.vue");
const LocalNews = () => import("@/views/local_news.vue");
const LocalNewsDetails = () => import("@/views/local_news_details.vue");


const MemberPurchaseInformation = () => import('./views/member-purchase-information.vue');//会员购买信息
const PurchaseSuccess = () => import('./views/purchase-success.vue');//购买成功

const AppointmentCourse = () => import('./views/appointment-course.vue');//预约场次

const Login = () => import('./views/login.vue');//密码登陆
const CodeLogin = () => import('./views/code-login.vue');//验证码登陆
const Registered = () => import('./views/registered.vue');//注册
const ForgetPassword = () => import('./views/forget-password.vue');//忘记密码
const RegistrationProtocol = () => import('./views/registration-protocol.vue');//注册协议
const AboutUs = () => import('./views/about-us.vue');//关于我们

const SelectSeminar = () => import('./views/select-seminar.vue');//选择场次
const SelectLaboratory = () => import('./views/select-laboratory.vue');//选择实验室
const ConfirmReservationInformation = () => import('./views/confirm-reservation-information.vue');//确认预约信息
const ScheduledActivities = () => import('./views/scheduled-activities.vue');//已预约活动


const MyHome = () => import('./views/my-home.vue');//我的
const Setting = () => import('./views/setting.vue');//设置

const MyIncome = () => import('./views/my-income.vue');//我的收益
const MyLink = () => import('./views/my-link.vue');//我的专属链接
const MyCode = () => import('./views/my-code.vue');//我的专属二维码

const BankList = () => import('./views/bank-list.vue');//银行卡
const BankBind = () => import('./views/bank-bind.vue');//银行卡绑定

const BalanceWithdrawal = () => import('./views/balance-withdrawal.vue');//余额提现
const BalanceWithdrawalSuccess = () => import('./views/balance-withdrawal-success.vue');//提现成功

const AddressMy = () => import('./views/address-my.vue');//我的地址
const AddressSetting = () => import('./views/address-setting.vue');//设置地址
const ServiceAgreement = () => import('./views/service-agreement.vue');//服务协议

//图片裁剪
const TextVueCropper = () => import('./views/vue-cropper.vue');//裁剪demo
const ImgCropper = () => import('./views/img-cropper.vue');//上传图片裁剪

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
      children:[
        {
          path: '/purchase_member',
          name: 'purchase_member',
          component: PurchaseMember,
        },
        {
          path: '/member_appointment',
          name: 'member_appointment',
          component: MemberAppointment,
        },
        {
          path: '/research_activities',
          name: 'research_activities',
          component: ResearchActivities,
        },
        {
          path: '/local_news',
          name: 'local_news',
          component: LocalNews,
        }
      ]
    },
    {
      path: '/local_news_details',
      name: 'local_news_details',
      component: LocalNewsDetails,
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
      path: '/registration-protocol',
      name: 'registration-protocol',
      component: RegistrationProtocol,
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUs,
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
      path: '/bank-list',
      name: 'bank-list',
      component: BankList,
    },
    {
      path: '/bank-bind',
      name: 'bank-bind',
      component: BankBind,
    },
    {
      path: '/balance-withdrawal',
      name: 'balance-withdrawal',
      component: BalanceWithdrawal,
    },
    {
      path: '/balance-withdrawal-success',
      name: 'balance-withdrawal-success',
      component: BalanceWithdrawalSuccess,
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
    {
      path: '/img-cropper',
      name: 'ImgCropper',
      component: ImgCropper,
    },
    {
      path: '/select-seminar',
      name: 'SelectSeminar',
      component: SelectSeminar,
    },
    {
      path: '/select-laboratory',
      name: 'SelectLaboratory',
      component: SelectLaboratory,
    },
    {
      path: '/confirm-reservation-information',
      name: 'ConfirmReservationInformation',
      component: ConfirmReservationInformation,
    },
    {
      path: '/scheduled-activities',
      name: 'ScheduledActivities',
      component: ScheduledActivities,
    },
    {
      path: '/TextVueCropper',
      name: 'TextVueCropper',
      component: TextVueCropper,
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
