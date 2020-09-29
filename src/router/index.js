
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Home from '../views/home.vue'
import Coursework from '../views/coursework.vue'
import DisplayCoursework from '../views/display_coursework.vue'
import UploadCoursework from '../views/upload_coursework.vue'
import Postponement from '../views/postponement.vue'
import MyPostponement from '../views/my_postponement.vue'
import IndividualPostponement from '../views/individual_postponement.vue'
import AllPostponements from '../views/all_postponements.vue'
import Layout from '@/components/layout/layout.vue'
import { TokenService } from '../services/storage.service.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Layout',
    component: Layout,

    children: [
      {
        path: '/',
        component: Login,
        meta: {
          public: true,
          onlyWhenLoggedOut: true
        }
      },
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/coursework',
        name: 'Coursework',
        component: Coursework,
      },
      {
        path: '/postponement',
        name: 'Postponement',
        component: Postponement
      },
      {
        path: '/display_coursework',
        name: 'DisplayCoursework',
        component: DisplayCoursework,
      }, {
        path: '/upload_coursework',
        name: 'UploadCoursework',
        component: UploadCoursework,
      },
      {
        path: '/my_postponement',
        name: 'MyPostponement',
        component: MyPostponement
      },
      {
        path: '/individual_postponement',
        name: 'IndividualPostponement',
        component: IndividualPostponement
      }, {
        path: '/all_postponements',
        name: 'AllPostponements',
        component: AllPostponements
      },
    ]
  }]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public)
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const isLoggedIn = !!TokenService.getToken()

  // console.log(isLoggedIn);


  if (!isPublic && !isLoggedIn) {
    return next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }

  if (isLoggedIn && onlyWhenLoggedOut) {
    return next('/home')
  }

  next()
})


export default router
