<script>
export default {
  name: "AboutSectionCard",
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true }
  }
};
</script>

<template>
    <div class="w-full bg-white flex flex-row rounded-md mt-10 shadow-lg md:flex-col md:w-1/3 md:shadow-none" >
        <div class="w-[25%] flex justify-center items-center md:w-full">
            <div class="flex justify-center items-center">
                <v-icon :name="icon" class="w-16 h-16 text-[#3D3A35]" />
            </div>
        </div>
        <div class="w-[75%] h-full flex flex-col p-3 md:w-full" >
            <h1 class="text-3xl font-bold mb-2 text-left md:text-center">{{ title }}</h1>
            <span class="text-lg text-left md:text-center">{{ description }}</span>
        </div>
    </div>
</template>