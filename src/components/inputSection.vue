<script setup>
import { ref } from "vue"

const search = ref("")
const typUdalosti = ref("")
const stav = ref("")

function handleSubmit() {
  console.log({
    search: search.value,
    typUdalosti: typUdalosti.value,
    stav: stav.value
  })
}
</script>

<template>
  <form 
    class="w-11/12 flex flex-col p-5 bg-white my-10 rounded-lg shadow-lg md:w-3/5 md:flex-row md:my-20"
    @submit.prevent="handleSubmit"
  >
    <div class="flex mr-0 md:mr-3 items-center">
      <input 
        v-model="search"
        type="text" 
        placeholder="Hľadať podľa názvu" 
        class="w-full border border-gray-400 rounded-lg px-2 py-1 placeholder-gray-400" 
      >
    </div>

    <div class="my-3 mr-0 flex gap-3 md:my-5 md:mr-3">
      <select 
        v-model="typUdalosti"
        name="udalost" 
        class="w-1/2 border border-gray-400 bg-white rounded-lg px-2 py-1 text-gray-400"
      >
        <option value="" disabled selected>Typ udalosti</option>
        <option value="hackathon">Hackathon</option>
        <option value="workshop">Workshop</option>
      </select>

      <select 
        v-model="stav"
        name="stav" 
        class="w-1/2 border border-gray-400 bg-white rounded-lg px-2 py-1 text-gray-400"
      >
        <option value="" disabled selected>Stav</option>
        <option value="nadchadzajuca">Nadchádzajúca</option>
        <option value="ukoncena">Ukončená</option>
      </select>
    </div>

    <div class="flex justify-center items-center">
      <button 
        type="submit"
        class="rounded-md bg-[#2E2A27] px-5 py-1 font-semibold text-white"
      >
        Filtrovať
      </button>
    </div>
  </form>
</template>