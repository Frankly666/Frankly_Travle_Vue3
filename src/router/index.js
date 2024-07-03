import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: () => import("../views/Home/Home.vue")
  },
  {
    path: "/favor",
    component: () => import("@/views/Favor/Favor.vue")
  },
  {
    path: "/order",
    component: () => import("@/views/Order/Order.vue")
  },
  {
    path: "/message",
    component: () => import("@/views/Message/Message.vue"),
    meta: {
      isHideTabBar: true
    }
  },
  {
    path: "/City",
    component: () => import("@/views/City/City.vue"),
    meta: {
      isHideTabBar: true
    }
  },
  {
    path: "/search",
    component: () => import("@/views/Search/Home-search.vue"),
    meta: {
      isHideTabBar: true
    }
  },
  {
    path: "/detail/:id",
    component: () => import("@/views/details/details.vue"),
    meta: {
      isHideTabBar: true
    }
  }
 ]

 const router = createRouter({
  history: createWebHashHistory(),
  routes,
 })

 export default router;