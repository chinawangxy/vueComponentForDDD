import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Page from "../views/count";
import Page2 from "../views/pages";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Page",
    component: Page
  },
  {
    path: "/Page2",
    name: "Page2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Page2" */ "../views/Pages/inde.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
