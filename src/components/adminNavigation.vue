<script>
export default {
  data() {
    return {
      items: [
        { label: "Pridať udalosť", icon: "md-add", path: "/admin" },
        { label: "Správa udalostí", icon: "pr-calendar", path: "/adminEvents" }
      ]
    };
  }
};
</script>

<template>
  <div class="fixed top-0 left-0 w-1/4 h-screen bg-[#3D3A35] flex flex-col justify-between items-center pt-16 pb-10">
    <div>
      <h1 class="text-white text-4xl font-bold mb-10">Admin Panel</h1>
      <div v-for="(item, index) in items" :key="index">
        <router-link :to="item.path" class="flex mb-3">
          <v-icon :name="item.icon" class="w-7 h-7 text-white mr-2" />
          <h1 class="text-xl font-semibold text-white">{{ item.label }}</h1>
        </router-link>
      </div>
    </div>

    <router-link to="/" class="flex">
      <v-icon name="md-exittoapp" class="w-7 h-7 text-white mr-2" />
      <p class="text-xl font-semibold text-white">Odhlásiť sa</p>
    </router-link>
  </div>
</template>
