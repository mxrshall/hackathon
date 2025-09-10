<script>
export default {
  data() {
    return {
      items: [
        { label: "Domov", icon: "bi-house-door-fill", path: "/"},
        { label: "Udalosti", icon: "md-daterange", path: "/events"},
        { label: "Profil", icon: "fa-user-alt", path: "/admin"}
      ]
    };
  }
};
</script>

<template>
  <div>
    <nav class="w-full h-[9vh] bg-white flex justify-center items-center fixed bottom-0 left-0 z-50 border-t-2 border-[#e2e2e2] md:top-0 md:border-none md:bg-transparent md:justify-end md:h-[10vh]">
        <div class="w-1/3 h-full flex justify-center items-center flex-col md:w-auto md:flex-row md:pr-16" v-for="(item, index) in items" :key="index">
          <router-link :to="item.path" class="w-full h-full flex flex-col justify-center items-center md:hidden">
            <v-icon :name="item.icon" class="w-7 h-7 text-black" />
            <h1 class="text-base font-semibold">{{ item.label }}</h1>
          </router-link>
          <router-link :to="item.path" class="hidden md:flex">
            <h1 class="text-lg font-bold">{{ item.label }}</h1>
          </router-link>
        </div>
    </nav>
  </div>
</template>