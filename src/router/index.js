import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/diaries/',
    name: 'Diaries',
    props: true,
    component: () => import( /* webpackChunkName: "Diaries" */ '../views/DiariesPage'),
  },
  {
    path:'/read/:slug',
    name: 'DiaryDetail',
    props:true,
    component: ()=> import(/* webpackChunkName: "DiaryDetail" */ '../views/DiaryDetail'),
  },
  {
    path: "/about",
    name: 'AboutPage',
    component: () => import(
      /* webpackChunkName: 'AboutPage'*/
      "../views/About"
    )
  },
  {
    path: "/:pathMatch(.*)",
    name: 'NotFound',
    component: () => import(
      /* webpackChunkName: 'NotFound'*/
      "../views/NotFound"
    )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router