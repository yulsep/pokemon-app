import { createRouter, createWebHistory } from "vue-router";
//import { HomeView } from "../pages";
const Home = () => import("../pages/HomeView.vue");

const routes = [{ path: "/", name: "Home", component: Home }];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  // We remove hash to avoid collapse at the moment of deploy
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
