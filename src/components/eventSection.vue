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
        {
          id: 1,
          title: "KódKemp UCM #1: Lepšia Univerzita",
          date: "28. OKT 2025",
          time: "9:00",
          description:
            "Prvý hackathon v semestri zameraný na vylepšenie digitálnych služieb pre študentov.",
        },
        {
          id: 2,
          title: "Frontend Workshop",
          date: "12. NOV 2025",
          time: "14:00",
          description: "Prvý workshop v zimnom semestri zameraný na moderné frontend technológie.",
        },
        {
          id: 3,
          title: "AI Meetup",
          date: "5. DEC 2025",
          time: "17:00",
          description: "Diskusia zameraná na na umelú inteligenciu a jej využitie v praxi.",
        },
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
            <SwiperSlide v-for="event in events" :key="event.id">
              <EventCard
                :title="event.title"
                :date="event.date"
                :time="event.time"
                :description="event.description"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="w-full mt-10 hidden md:flex">
          <div v-for="event in events" :key="event.id" class="w-1/3 px-8">
            <EventCard
              :title="event.title"
              :date="event.date"
              :time="event.time"
              :description="event.description"
            />
          </div>
        </div>
    </section>
</template>