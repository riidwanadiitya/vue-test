import Vue from 'vue'
import Router from 'vue-router'
import PersonnelList from './PersonnelList'
import Beranda from './Beranda'
import DailyAttendence from './DailyAttendence'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PersonnelList',
      component: PersonnelList
    },
    {
      path: '/beranda',
      name: 'Beranda',
      component: Beranda
    },
    {
      path: '/daily-attendence',
      name: 'DailyAttendence',
      component: DailyAttendence
    }
  ]
})
