import { createRouter, createWebHashHistory } from "vue-router";
import Container from "../views/table/index.vue";

const routes = [
  {
    path: "/",
    name: "Container",
    component: Container,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
