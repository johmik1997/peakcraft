import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./router"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add the icons to the library
library.add(faBars, faTimes);

// Create the app
const app = createApp(App);
app.use(router)
// Register the FontAwesomeIcon component globally
app.component("font-awesome-icon", FontAwesomeIcon);

// Mount the app
app.mount("#app");