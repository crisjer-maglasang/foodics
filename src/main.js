import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

const app = createApp(App);

if (process.env.NODE_ENV === "development") {
  app.config.devtools = true;
}

app.use(router).use(store).mount("#app");
