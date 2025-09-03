import { createApp } from "vue";
import './style.css'
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiSolidUsers, FaUserAlt, MdDaterange, FaRegularLightbulb, BiHouseDoorFill, GiStarsStack, BiClockFill, FaMapMarkerAlt, MdAdd, PrCalendar, MdExittoapp, RiPencilFill } from "oh-vue-icons/icons";

import router from "./components/router";

addIcons(HiSolidUsers, FaRegularLightbulb, GiStarsStack, FaUserAlt, MdDaterange, BiHouseDoorFill, BiClockFill, FaMapMarkerAlt, MdAdd, PrCalendar, MdExittoapp, RiPencilFill );

const app = createApp(App);
app.use(router);
app.component("v-icon", OhVueIcon);
app.mount("#app");

