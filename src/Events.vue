<script>
import InputSection from "./components/inputSection.vue";
import EventCard2 from "./components/EventCard2.vue";
import Navigation from "./components/navigation.vue";

export default {
  components: {
    InputSection,
    EventCard2,
    Navigation
  },
  data() {
    return {
      events: [
        { title: "KódKemp UCM #1: Lepšia Univerzita", time: "9:00 - 18:00", description: "Prvý hackathon v semestri zameraný na vylepšenie digitálnych služieb pre študentov.", date: "28 OKT", interested: 25, organizer: "Default", place: "PMH05"},
        { title: "Frontend Workshop", time: "9:00 - 18:00", description: "Prvý workshop v zimnom semestri zameraný na moderné frontend technológie.", date: "12 NOV", interested: 12, organizer: "Default", place: "PMH08"},
        { title: "AI Meetup", time: "9:00 - 18:00", description: "Diskusia zameraná na na umelú inteligenciu a jej využitie v praxi.", date: "5 DEC", interested: 5, organizer: "Default", place: "PMH05"},
        { title: "KódKemp UCM #1: Lepšia Univerzitaaaaaaaaaaaaaa", time: "9:00 - 18:00", description: "Prvý hackathon v semestri zameraný na vylepšenie digitálnych služieb pre študentov.", date: "28 OKT", interested: 30, organizer: "Default", place: "H01"},
        { title: "KódKemp UCM #1: Lepšia Univerzita", time: "9:00 - 18:00", description: "Prvý hackathon v semestri zameraný na vylepšenie digitálnych služieb pre študentov.", date: "28 OKT", interested: 41, organizer: "Default", place: "H01"}
      ]
    }
  }
};
</script>

<template>
  <Navigation />
  <div class="w-full min-h-screen bg-[#EFEFEF] flex flex-col items-center">
    <InputSection />
    <div class="w-full flex flex-col justify-start pb-20">
      <div 
        v-for="(event, index) in events" 
        :key="index" 
        class="w-full flex justify-center items-center"
      >
        <EventCard2
          :index="index"
          :title="event.title" 
          :time="event.time" 
          :description="event.description" 
          :date="event.date" 
        />
      </div>
    </div>
  </div>
</template>