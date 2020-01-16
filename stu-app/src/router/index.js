import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/myself",
    name: "myself",
    component: () => import("../views/users/myself.vue"),
  },
  {
    path: "/updataUser",
    name: "updataUser",
    component: () => import("../views/users/updatamsg.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/users/login.vue"),
  },
  {
    path: "/timetable",
    name: "timetable",
    component: () => import("../views/timetable.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/home/search.vue"),
  },
  {
    path: "/check",
    name: "check",
    component: () => import("../views/home/check.vue"),
  },
  {
    path: "/searchmsg/:id",
    name: "searchmsg",
    component: () => import("../views/home/searchmsg.vue"),
  },
  {
    path: "/homeWork",
    name: "homeWork",
    component: () => import("../views/about/homeWork.vue"),
  },
  {
    path: "/checkWork/:id",
    name: "checkWork",
    component: () => import("../views/about/checkWork.vue"),
  },
  {
    path: "/showCheck",
    name: "showCheck",
    component: () => import("../views/home/showCheck.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
