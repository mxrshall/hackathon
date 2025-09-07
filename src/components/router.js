import { createRouter, createWebHashHistory } from "vue-router";

import Homepage from "../Homepage.vue";
import Events from "../Events.vue";
import Event from "../Event.vue";
import Admin from "../Admin.vue";
import AdminEvents from "../AdminEvents.vue";
import AdminEventDetails from "../AdminEventDetails.vue";

const routes = [
  { path: "/", name: "Homepage", component: Homepage },
  { path: "/events", name: "Events", component: Events },
  { 
    path: "/event/:id?", 
    name: "Event", 
    component: Event,
    props: true
  },
  { path: "/admin", name: "Admin", component: Admin },
  { path: "/adminEvents", name: "AdminEvents", component: AdminEvents },
  { 
    path: "/adminEventDetails/:id?", 
    name: "AdminEventDetails", 
    component: AdminEventDetails,
    props: true 
  }
];

const router = createRouter({
  history: createWebHashHistory("/hackathon/"),
  routes,
});

export default router;
