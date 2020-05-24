import Vue from "vue";
import Router, { RouteConfig } from "vue-router";
import { RouteNames } from "@/routing/routeNames";
import Home from "@/views/Home.vue";

Vue.use(Router);

// route order matters
export const routes: RouteConfig[] = [
  {
    path: "",
    redirect: { name: RouteNames.home },
  },
  {
    path: "/home",
    name: RouteNames.home,
    component: Home,
  },
  {
    path: "/*",
    redirect: { name: RouteNames.home },
  },
];

export const router = new Router({
  mode: "history",
  routes: routes,
});

export default router;
