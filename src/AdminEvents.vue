<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Login from "./components/login.vue";
import Title from "./components/sectionTitle.vue";
import AdminNavigation from "./components/adminNavigation.vue";

const isLoggedIn = ref(false);
const router = useRouter();

function goToDetails(index) {
  router.push({ name: "AdminEventDetails", params: { id: index } });
}

function handleLoginSuccess() {
  isLoggedIn.value = true;
}

const events = ref([
  { title: "KódKemp UCM #1: Lepšia Univerzita", time: "9:00 - 18:00", description: "Prvý hackathon v semestri zameraný na vylepšenie digitálnych služieb pre študentov.", date: "28 OKT", interested: 25},
  { title: "KódKemp UCM #1: Lepšia Univerzitaaaaaaaaaaaaaa", time: "9:00 - 18:00", description: "Prvý hackathon v semestri zameraný na vylepšenie digitálnych služieb pre študentov.", date: "28 OKT", interested: 30},
  { title: "KódKemp UCM #1: Lepšia Univerzita", time: "9:00 - 18:00", description: "Prvý hackathon v semestri zameraný na vylepšenie digitálnych služieb pre študentov.", date: "17 OKT", interested: 12},
  { title: "KódKemp UCM #1: Lepšia Univerzita", time: "9:00 - 18:00", description: "Prvý hackathon v semestri zameraný na vylepšenie digitálnych služieb pre študentov.", date: "14 SEP", interested: 5},
  { title: "KódKemp UCM #1: Lepšia Univerzita", time: "9:00 - 18:00", description: "Prvý hackathon v semestri zameraný na vylepšenie digitálnych služieb pre študentov.", date: "28 OKT", interested: 41}
]);

</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <Login v-if="!isLoggedIn" @login-success="handleLoginSuccess" />
    <div v-else class="w-full h-screen flex">
      <AdminNavigation />
      <div class="ml-[25%] w-9/12 h-screen bg-[#EFEFEF] p-10 flex flex-col items-center">
        <Title text="Správa udalostí" />
        <div
          v-for="(event, index) in events" 
          :key="index"
          class="w-3/4 bg-white rounded-lg flex mb-5"
        >
          <div class="w-1/6 bg-[#2E2A27] flex flex-col justify-center items-center text-center p-2 rounded-lg md:w-1/6">
            <h1 class="text-2xl font-bold text-white">{{ event.date }}</h1>
          </div>
          <div class="w-4/6 bg-white p-5 rounded-lg flex flex-col">
            <h1 class="text-2xl font-bold">{{ event.title }}</h1>
            <div class="flex items-center my-2">
              <v-icon name="bi-clock-fill" class="w-6 h-6 text-[#3D3A35] mr-2" />
              <p>{{ event.time }}</p>
              <v-icon name="hi-solid-users" class="w-6 h-6 text-[#3D3A35] ml-5 mr-2" />
              <p>Počet záujemcov: {{ event.interested }}</p>
            </div>
          </div>
          <div class="w-1/6 bg-white p-5 rounded-lg flex flex-col items-center justify-center">
            <router-link to="/adminEventDetails">
              <v-icon name="ri-pencil-fill" class="w-6 h-6 text-[#3D3A35] mr-2" @click="goToDetails(index)" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
