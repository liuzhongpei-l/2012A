import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: '/home',
  },
  {
    path: "/home",
    name: "home",
    component: () => import('../views/home/home.vue'),
    children: [
      {
        path: '/home',
        redirect: '/home/index',
      },
      {
        path: '/home/index',
        name: "index",
        component: () => import('../views/home/index')
      },
      {
        path: '/home/task',
        name: "task",
        component: () => import('../views/home/task')
      },
      {
        path: '/home/place',
        name: "place",
        component: () => import('../views/home/place')
      },
      {
        path: '/home/books',
        name: "books",
        component: () => import('../views/home/books')
      },
      {
        path: '/home/my',
        name: "my",
        component: () => import('../views/home/my')
      },
    ]
  },
  {
    path: '/login',
    name: "login",
    component: () => import('../views/login')
  },
  {
    path: '/detile',
    name: "detile",
    component: () => import('../views/detile')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
