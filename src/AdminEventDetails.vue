<script setup>
import { ref } from "vue";
import Login from "./components/login.vue";
import Title from "./components/sectionTitle.vue";
import AdminNavigation from "./components/adminNavigation.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = Number(route.params.id);

const events = ref([
  { title: "KódKemp UCM #1: Lepšia Univerzita", time: "9:00 - 18:00", description: "Prvý hackathon v semestri zameraný na vylepšenie digitálnych služieb pre študentov.", date: "28 OKT", interested: 25, organizer: "Default", place: "PMH05"},
  { title: "KódKemp UCM #1: Lepšia Univerzitaaaaaaaaaaaaaa", time: "9:00 - 18:00", description: "Prvý hackathon v semestri zameraný na vylepšenie digitálnych služieb pre študentov.", date: "28 OKT", interested: 30, organizer: "Default", place: "H01"},
  { title: "KódKemp UCM #1: Lepšia Univerzita", time: "9:00 - 18:00", description: "Prvý hackathon v semestri zameraný na vylepšenie digitálnych služieb pre študentov.", date: "17 OKT", interested: 12, organizer: "Default", place: "PMH08"},
  { title: "KódKemp UCM #1: Lepšia Univerzita", time: "9:00 - 18:00", description: "Prvý hackathon v semestri zameraný na vylepšenie digitálnych služieb pre študentov.", date: "14 SEP", interested: 5, organizer: "Default", place: "PMH05"},
  { title: "KódKemp UCM #1: Lepšia Univerzita", time: "9:00 - 18:00", description: "Prvý hackathon v semestri zameraný na vylepšenie digitálnych služieb pre študentov.", date: "28 OKT", interested: 41, organizer: "Default", place: "H01"}
]);

const currentEvent = events.value[id];

const form = ref({
  title: currentEvent?.title || "",
  organizer: currentEvent?.organizer || "",
  date: currentEvent?.date || "",
  time: currentEvent?.time || "",
  place: currentEvent?.place || "",
  description: currentEvent?.description || ""
});

const isLoggedIn = ref(false);

function handleLoginSuccess() {
  isLoggedIn.value = true;
}

function handleSubmit() {
  console.log("Form data:", form.value);
}
</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <Login v-if="!isLoggedIn" @login-success="handleLoginSuccess" />
    <div v-else class="w-full h-screen flex">
      <AdminNavigation />
      <div class="ml-[25%] w-9/12 h-screen bg-[#EFEFEF] p-10 flex flex-col items-center">
        <Title text="Správa udalostí" />
        <form 
          class="w-3/4 bg-white rounded-lg flex"
          @submit.prevent="handleSubmit"
        >
          <div class="w-1/2 flex flex-col justify-start items-start p-8">
            <label class="text-lg font-bold mb-2">Názov udalosti</label>
            <input 
              v-model="form.title"
              type="text"
              class="w-full border border-gray-400 rounded-lg px-2 py-1 placeholder-gray-400 mb-2" 
            >
            <label class="text-lg font-bold mb-2">Organizátor</label>
            <input 
              v-model="form.organizer"
              type="text"
              class="w-full border border-gray-400 rounded-lg px-2 py-1 placeholder-gray-400 mb-2" 
            >
            <label class="text-lg font-bold mb-2">Dátum</label>
            <input 
              v-model="form.date"
              type="text"
              class="w-full border border-gray-400 rounded-lg px-2 py-1 placeholder-gray-400 mb-2" 
            >
            <label class="text-lg font-bold mb-2">Čas události</label>
            <input 
              v-model="form.time"
              type="text"
              class="w-full border border-gray-400 rounded-lg px-2 py-1 placeholder-gray-400 mb-2" 
            >
            <label class="text-lg font-bold mb-2">Miestnosť</label>
            <input 
              v-model="form.place"
              type="text"
              class="w-full border border-gray-400 rounded-lg px-2 py-1 placeholder-gray-400 mb-2" 
            >
          </div>
          <div class="w-1/2 flex flex-col justify-start items-start p-8">
            <label class="text-lg font-bold mb-2">Popis udalosti</label>
            <textarea 
              v-model="form.description"
              class="w-full h-32 border border-gray-400 rounded-lg px-2 py-1 placeholder-gray-400 mb-2"
            ></textarea>
            <button 
              type="submit"
              class="rounded-md bg-[#2E2A27] px-5 py-1 font-semibold text-white"
            >
              Pridať událosť
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
