import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PurchaseMember from './views/purchase_member.vue'
// import MemberAppointment from './views/member_appointment.vue'
const MemberAppointment = () => import('./views/member_appointment.vue');
import ResearchActivities from './views/research_activities.vue'
import LocalNews from './views/local_news.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
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
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
