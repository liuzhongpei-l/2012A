import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: () => import('../views/home/index.vue'),
    children: [
      {
        path: "/home",
        redirect: "/home/index"
      },
      {
        path: "/home/index",
        name: "index",
        component: () => import('../views/home/index/index.vue'),
      },
      {
        path: "/home/system",
        name: "system",
        component: () => import('../views/home/system'),
      },
      {
        path: "/home/user",
        name: "user",
        component: () => import('../views/home/user'),
      },
      {
        path: "/home/*",
        name: "404",
        component: () => import('../views/404.vue')
      },
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import('../views/login/index')
  },
  {
    path: "/registry",
    name: "registry",
    component: () => import('../views/registry/index')
  },
  {
    path: "/*",
    name: "404",
    component: () => import('../views/404.vue')
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const whiteList = ['/login', '/registry']
router.beforeEach((to, from, next) => {
  if (whiteList.includes(to.path)) {
    next()
  } else {
    let token = window.localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next({ path: "/login" })
    }
  }
})
export default router