import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props:true
  },
  {
    path:'/destination/:slug',
    name: 'DestinationDetails',
    props:true,
    component: ()=> import(/* webpackChunkName: "DestinationDetails" */ '../views/DestinationDetails'),
    children:[
      {
        path: ":expSlug",
        name: "expDetails",
        props:true,
        component: ()=> import(/* webpackChunkName: "expDetails" */ '../views/Experiences'),
      }
    ]
  },
  {
    path: "/:pathMatch(.*)",
    name: 'NotFound',
    component: ()=> import (
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
