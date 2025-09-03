<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Navigation from "./components/navigation.vue";

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

const detail = ref({
  title: currentEvent?.title || "",
  organizer: currentEvent?.organizer || "",
  date: currentEvent?.date || "",
  time: currentEvent?.time || "",
  place: currentEvent?.place || "",
  description: currentEvent?.description || ""
});

</script>

<template>
    <Navigation />
    <div class="w-full h-[30vh] bg-[#3D3A35] md:h-[50vh]" />
    <div class="w-full absolute top-10 left-0 flex flex-col justify-start items-center md:top-20">
        <div class="w-5/6 p-5 bg-white rounded-lg md:w-1/2">
            <h1 class="text-center text-3xl font-bold">{{ detail.title }}</h1>
        </div>
        <div class="w-5/6 p-5 bg-white rounded-lg mt-10 flex flex-col items-center md:w-1/2 md:p-7">
            <div class="w-full">
                <div class="flex items-center mb-2 font-semibold">
                    <v-icon name="fa-user-alt" class="w-6 h-6 text-[#3D3A35] mr-2" />
                    <p>{{ detail.organizer }}</p>
                </div>
                <div class="flex items-center mb-2 font-semibold">
                    <v-icon name="md-daterange" class="w-6 h-6 text-[#3D3A35] mr-2" />
                    <p>{{ detail.date }}</p>
                </div>
                <div class="flex items-center mb-2 font-semibold">
                    <v-icon name="bi-clock-fill" class="w-6 h-6 text-[#3D3A35] mr-2" />
                    <p>{{ detail.time }}</p>
                </div>
                <div class="flex items-center mb-2 font-semibold">
                    <v-icon name="fa-map-marker-alt" class="w-6 h-6 text-[#3D3A35] mr-2" />
                    <p>{{ detail.place }}</p>
                </div>
            </div>
            <div class="w-full my-4">
                <span>
                    {{ detail.description }}
                </span>
            </div>
            <button class="rounded-md bg-[#2E2A27] px-5 py-1 font-semibold mt-2 text-white">
                Registrácia
            </button>
        </div>
    </div>
</template>