<script>
export default {
  name: "EventCard2",
  props: {
    title: { type: String, required: true },
    time: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    index: { type: [String, Number], required: true }
  },
  computed: {
    shorttitle() {
      return this.title.length > 40
        ? this.title.slice(0, 40) + "..."
        : this.title;
    },
    shortdesc() {
      return this.description.length > 60
        ? this.description.slice(0, 60) + "..."
        : this.description;
    }
  },
  methods: {
    goToDetails() {
      this.$router.push({ name: "Event", params: { id: this.index } });
    }
  }
};
</script>

<template>
  <div class="w-11/12 hidden mb-5 md:w-3/5 shadow-lg md:flex">
    
    <div class="w-1/6 bg-[#2E2A27] flex flex-col justify-center items-center text-center p-2 rounded-lg">
      <h1 class="text-3xl font-bold text-white">{{ date }}</h1>
    </div>

    <div class="w-5/6 bg-white p-3 rounded-lg flex flex-col">
      <h1 class="text-xl font-bold">{{ shorttitle }}</h1>

      <div class="flex items-center my-2">
        <v-icon name="bi-clock-fill" class="w-6 h-6 text-[#3D3A35] mr-2" />
        <p>{{ time }}</p>
      </div>

      <span>{{ shortdesc }}</span>

      <button
        @click="goToDetails"
        class="rounded-md bg-[#2E2A27] px-5 py-1 font-semibold text-white flex mt-2 w-auto self-start"
      >
        Zistiť viac
      </button>
    </div>
  </div>


  <div class="w-11/12 flex mb-5 md:w-3/5 shadow-lg md:hidden" @click="goToDetails">
    
    <div class="w-1/5 bg-[#2E2A27] flex flex-col justify-center items-center text-center p-2 rounded-lg">
      <h1 class="text-2xl font-bold text-white">{{ date }}</h1>
    </div>

    <div class="w-5/6 bg-white p-3 rounded-lg flex flex-col">
      <h1 class="text-xl font-bold">{{ shorttitle }}</h1>

      <div class="flex items-center my-2">
        <v-icon name="bi-clock-fill" class="w-6 h-6 text-[#3D3A35] mr-2" />
        <p>{{ time }}</p>
      </div>

      <span>{{ shortdesc }}</span>

    </div>
  </div>
</template>
