<script>
import HeroSection from "./components/heroSection.vue";
import AboutSection from "./components/aboutSection.vue";
import EventSection from "./components/eventSection.vue";
import Navigation from "./components/navigation.vue";

export default {
  components: {
    HeroSection,
    AboutSection,
    EventSection,
    Navigation
  }
};
</script>

<template>
  <div>
    <Navigation />
    <HeroSection />
    <AboutSection />
    <EventSection />
  </div>
</template>