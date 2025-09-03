<script setup>
import { ref } from "vue";
import Login from "./components/login.vue";
import Title from "./components/sectionTitle.vue";
import AdminNavigation from "./components/adminNavigation.vue";

const title = ref("")
const organizer = ref("")
const date = ref("")
const time = ref("")
const place = ref("")
const description = ref("")

function handleSubmit() {
  console.log({
    title: title.value,
    organizer: organizer.value,
    date: date.value,
    time: time.value,
    place: place.value,
    description: description.value
  })
}

const isLoggedIn = ref(false);

function handleLoginSuccess() {
  isLoggedIn.value = true;
}
</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <Login v-if="!isLoggedIn" @login-success="handleLoginSuccess" />
    <div v-else class="w-full h-screen flex">
      <AdminNavigation />
      <div class="ml-[25%] w-9/12 h-screen bg-[#EFEFEF] p-10 flex flex-col items-center">
        <Title text="Pridať událosť" />
        <form 
          class="w-3/4 bg-white rounded-lg flex"
          @submit.prevent="handleSubmit"
        >
          <div class="w-1/2 flex flex-col justify-start items-start p-8">
            <label class="text-lg font-bold mb-2">Názov udalosti</label>
            <input 
              v-model="title"
              type="text"
              class="w-full border border-gray-400 rounded-lg px-2 py-1 placeholder-gray-400 mb-2" 
            >
            <label class="text-lg font-bold mb-2">Organizátor</label>
            <input 
              v-model="organizer"
              type="text"
              class="w-full border border-gray-400 rounded-lg px-2 py-1 placeholder-gray-400 mb-2" 
            >
            <label class="text-lg font-bold mb-2">Dátum</label>
            <input 
              v-model="date"
              type="text"
              class="w-full border border-gray-400 rounded-lg px-2 py-1 placeholder-gray-400 mb-2" 
            >
            <label class="text-lg font-bold mb-2">Čas události</label>
            <input 
              v-model="time"
              type="text"
              class="w-full border border-gray-400 rounded-lg px-2 py-1 placeholder-gray-400 mb-2" 
            >
            <label class="text-lg font-bold mb-2">Miestnosť</label>
            <input 
              v-model="place"
              type="text"
              class="w-full border border-gray-400 rounded-lg px-2 py-1 placeholder-gray-400 mb-2" 
            >
          </div>
          <div class="w-1/2 flex flex-col justify-start items-start p-8">
            <label class="text-lg font-bold mb-2">Popis udalosti</label>
            <textarea 
              v-model="description"
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
