import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import AboutUs from "../views/AboutUs.vue";
import Contact from "../views/Contact.vue";
import PostDetails from "../views/PostDetails.vue";

const routes = [
  { path: "/", name: "Dashboard", component: Dashboard },
  {
    path: "/post/:id",
    name: "PostDetails",
    component: PostDetails,
    props: true,
  },
  { path: "/about-us", name: "AboutUs", component: AboutUs },
  { path: "/contact", name: "Contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
