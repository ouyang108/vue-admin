import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createPinia } from "pinia";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const pinia = createPinia();
import router from "./routes/index";
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(pinia);
app.use(router);
app.mount("#app");
