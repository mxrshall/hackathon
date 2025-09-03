<script>
import Title from "./sectionTitle.vue";
import AboutSectionCard from "./aboutSectionCard.vue";

export default {
  components: {
    Title,
    AboutSectionCard
  }
};
</script>

<template>
    <section class="w-full bg-[#EFEFEF] py-10 px-3 md:bg-white">
        <Title text="Prečo sa zapojiť" />
        <div class="flex flex-col items-center md:flex-row md:items-start">
          <AboutSectionCard title="Reálne projekty" description="Rieš problémy, ktoré majú reálny dopad na život na univerzite." icon="fa-regular-lightbulb" />
          <AboutSectionCard title="Získaj kontakty" description="Spoznaj študentov z iných ročníkov a učiteľov." icon="hi-solid-users" />
          <AboutSectionCard title="Rozviň svoje schopnosti" description="Nauč sa nové technológie v praxi a vyskúšaj si tímovú prácu." icon="gi-stars-stack" />
        </div>
    </section>
</template>