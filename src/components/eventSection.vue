<script>
import Title from "./sectionTitle.vue";
import EventCard from "./eventCard.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    Title,
    EventCard,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      modules: [Navigation],
      events: [
        { title: "KódKemp UCM #1: Lepšia Univerzita", time: "9:00 - 18:00", description: "Prvý hackathon v semestri zameraný na vylepšenie digitálnych služieb pre študentov.", date: "28 OKT", interested: 25, organizer: "Default", place: "PMH05"},
        { title: "Frontend Workshop", time: "9:00 - 18:00", description: "Prvý workshop v zimnom semestri zameraný na moderné frontend technológie.", date: "12 NOV", interested: 12, organizer: "Default", place: "PMH08"},
        { title: "AI Meetup", time: "9:00 - 18:00", description: "Diskusia zameraná na na umelú inteligenciu a jej využitie v praxi.", date: "5 DEC", interested: 5, organizer: "Default", place: "PMH05"},
        { title: "KódKemp UCM #1: Lepšia Univerzitaaaaaaaaaaaaaa", time: "9:00 - 18:00", description: "Prvý hackathon v semestri zameraný na vylepšenie digitálnych služieb pre študentov.", date: "28 OKT", interested: 30, organizer: "Default", place: "H01"},
        { title: "KódKemp UCM #1: Lepšia Univerzita", time: "9:00 - 18:00", description: "Prvý hackathon v semestri zameraný na vylepšenie digitálnych služieb pre študentov.", date: "28 OKT", interested: 41, organizer: "Default", place: "H01"}
      ],
      swiperStyles: {
        '--swiper-navigation-color': 'black',
        '--swiper-navigation-size': '28px',
      }
    };
  },
};
</script>

<template>
    <section class="w-full bg-[#EFEFEF] flex flex-col items-center py-10">
        <Title text="Nenechaj si ujsť" />
        <div class="w-full h-[50vh] mt-10 flex md:hidden">
          <Swiper
            :modules="modules"
            :space-between="20"
            :slides-per-view="1"
            :navigation="true"
            :loop="true"
            :style="swiperStyles"
          >
            <SwiperSlide v-for="(event, index) in events.slice(0, 3)" :key="index">
              <EventCard
                :index="index"
                :title="event.title"
                :date="event.date"
                :time="event.time"
                :description="event.description"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="w-full mt-10 hidden md:flex">
          <div v-for="(event, index) in events.slice(0, 3)" :key="index" class="w-1/3 px-8">
            <EventCard
              :index="index"
              :title="event.title"
              :date="event.date"
              :time="event.time"
              :description="event.description"
            />
          </div>
        </div>
    </section>
</template>