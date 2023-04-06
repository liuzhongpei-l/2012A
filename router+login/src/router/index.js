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
    redirect: "/home/index",
    component: () => import('../views/home/home.vue'),
    children: [
      {
        path: "/home/index",
        name: "index",
        component: () => import('../views/home/index')
      },
      {
        path: "/home/user",
        name: "user",
        component: () => import('../views/home/user')
      },
      {
        path: "/home/system",
        name: "system",
        component: () => import('../views/home/system')
      },
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import('../views/login')
  },
  {
    path: "/registry",
    name: "registry",
    component: () => import('../views/registry')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const whiteList = ['/login', '/registry', '/home/user']
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
