import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import EventList from "../views/EventList.vue";
import About from "../views/About.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "EventList",
    component: EventList
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
