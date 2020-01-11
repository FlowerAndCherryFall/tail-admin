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
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/timetable.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/home/search.vue"),
  },
  {
    path: "/check",
    name: "check",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/home/check.vue"),
  },
  {
    path: "/searchmsg/:id",
    name: "searchmsg",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/home/searchmsg.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
