<script setup>
import { ref } from "vue";
import Title from "./sectionTitle.vue";

const name = ref("");
const password = ref("");

const emit = defineEmits(["login-success"]);

function handleSubmit() {
  console.log({
    name: name.value,
    password: password.value
  });

  emit("login-success");
}
</script>

<template>
  <div class="w-full h-screen flex justify-center items-center bg-[#EFEFEF]">
    <div class="w-2/5 bg-white rounded-lg flex flex-col justify-center items-center p-5">
      <Title text="Admin Prihlasenie" />
      <form class="w-3/4 mt-5" @submit.prevent="handleSubmit">
        <label class="text-lg font-bold mb-5">Používateľské meno</label>
        <input 
          v-model="name"
          type="text" 
          placeholder="Hľadať podľa názvu" 
          class="w-full border border-gray-400 rounded-lg px-2 py-1 mt-2 mb-3" 
        >

        <label class="text-lg font-bold mb-5">Heslo</label>
        <input 
          v-model="password"
          type="password" 
          placeholder="Heslo" 
          class="w-full border border-gray-400 rounded-lg px-2 py-1 mt-2 mb-8" 
        >

        <div class="flex justify-center">
          <button 
            type="submit" 
            class="rounded-md bg-[#2E2A27] px-6 py-2 font-semibold text-sm text-white"
          >
            Prihlásiť sa
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
