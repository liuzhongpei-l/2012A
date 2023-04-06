import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/getUserInfo/:id",
    name: "getUserInfo",
    meta: {
      name: "测试动态路由"
    },
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/home/list',
        name: 'list',
        alias: ['/people', 'test'],
        component: () => import('../views/list.vue')
      },
    ]
  },
  {
    path: '/class',
    name: 'class',
    // alias: ['/people', '/list'],
    component: () => import('../views/Class.vue')
  },
  {
    path: '/car',
    name: 'car',
    component: () => import('../views/Car.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../views/My.vue')
  },
  {
    path: '/*',
    name: '404',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
