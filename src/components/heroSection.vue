<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const events = ref([
  { title: "KódKemp UCM #1: Lepšia Univerzita", time: "9:00 - 18:00", description: "Prvý hackathon v semestri zameraný na vylepšenie digitálnych služieb pre študentov.", date: "28 OKT", interested: 25, organizer: "Default", place: "PMH05"},
  { title: "Frontend Workshop", time: "9:00 - 18:00", description: "Prvý workshop v zimnom semestri zameraný na moderné frontend technológie.", date: "12 NOV", interested: 12, organizer: "Default", place: "PMH08"},
  { title: "AI Meetup", time: "9:00 - 18:00", description: "Diskusia zameraná na na umelú inteligenciu a jej využitie v praxi.", date: "5 DEC", interested: 5, organizer: "Default", place: "PMH05"},
  { title: "KódKemp UCM #1: Lepšia Univerzitaaaaaaaaaaaaaa", time: "9:00 - 18:00", description: "Prvý hackathon v semestri zameraný na vylepšenie digitálnych služieb pre študentov.", date: "28 OKT", interested: 30, organizer: "Default", place: "H01"},
  { title: "KódKemp UCM #1: Lepšia Univerzita", time: "9:00 - 18:00", description: "Prvý hackathon v semestri zameraný na vylepšenie digitálnych služieb pre študentov.", date: "28 OKT", interested: 41, organizer: "Default", place: "H01"}
]);

const months = {
  JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5,
  JUL: 6, AUG: 7, SEP: 8, OCT: 9, OKT: 9, NOV: 10, DEC: 11
};

function parseDate(dateStr) {
  const [day, monthStr] = dateStr.split(" ");
  const month = months[monthStr.toUpperCase()];
  const year = new Date().getFullYear();
  return new Date(year, month, parseInt(day));
}

const closestEvent = computed(() => {
  const today = new Date();
  return events.value
    .map((e, index) => ({ ...e, index, dateObj: parseDate(e.date) }))
    .filter(e => e.dateObj >= today)
    .sort((a, b) => a.dateObj - b.dateObj)[0];
});

function goToDetails() {
  if (closestEvent.value) {
    router.push({ name: "Event", params: { id: closestEvent.value.index } });
  }
}
</script>

<template>
  <section class="w-full h-[60vh] bg-[#3D3A35] text-white flex flex-col justify-center items-center text-center md:h-[75vh]">
    <h1 class="text-5xl font-bold mb-8 md:text-6xl">Tvor, Inovuj, Spolupracuj.</h1>
    <span class="text-lg mb-8 md:text-base">
      Platforma pre kreatívne a technické výzvy na UCM. Zapoj sa do hackathonov a workshopov, ktoré ťa posunú vpred.
    </span>

    <button 
      @click="goToDetails"
      class="rounded-md bg-[#2E2A27] p-3 font-semibold text-sm"
      :disabled="!closestEvent"
    >
      Najbližší Hackathon
    </button>
  </section>
</template>
