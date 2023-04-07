import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: () => import('../views/home/Home.vue'),
    children: [
      {
        path: "/home",
        redirect: "/home/index"
      },
      {
        path: "/home/index",
        name: "index",
        component: () => import('../views/home/index/Index.vue')
      },
      {
        path: "/home/class",
        name: "class",
        component: () => import('../views/home/class/Class.vue')
      },
      {
        path: "/home/car",
        name: "car",
        component: () => import('../views/home/car/Car.vue')
      },
      {
        path: "/home/my",
        name: "my",
        component: () => import('../views/home/my/My.vue')
      },
    ]
  },

  {
    path: "/detile/:id",
    name: "detile",
    component: () => import('../views/detile/Detiles.vue')
  },
  {
    path: "/login",
    name: "login",
    component: () => import('../views/login/Login.vue')
  },
  {
    path: "/registry",
    name: "registry",
    component: () => import('../views/registry/Registry.vue')
  },
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
export default router;