<script>
import Title from "./sectionTitle.vue";

export default {
    components: {
        Title
    },
    name: "EventCard",
    props: {
        title: { type: String, required: true },
        date: { type: String, required: true },
        time: { type: String, required: true },
        description: { type: String, required: true }
    },
    computed: {
        shorttitle() {
            return this.title.length > 30
            ? this.title.slice(0, 30) + "..."
            : this.title;
        },
        shortdesc() {
            return this.description.length > 100
            ? this.description.slice(0, 100) + "..."
            : this.description;
        }
    },
};
</script>

<template>
    <div class="w-4/5 bg-white rounded-lg flex flex-col justify-center items-center mx-auto shadow-lg md:w-full">
        <div class="w-full h-36 bg-[#3D3A35] rounded-lg hidden md:flex" />
        <div class="p-5 flex flex-col justify-center items-center md:items-start">
            <h1 class="text-3xl font-bold text-center md:text-xl">
                {{ shorttitle }}
            </h1>
            <div class="w-full flex flex-col font-medium mt-5 md:flex-row">
                <div class="flex items-center mb-2 md:mb-0 md:mr-3">
                    <v-icon name="md-daterange" class="w-6 h-6 text-[#3D3A35] mr-2" />
                    <p>{{ date }}</p>
                </div>
                <div class="flex items-center">
                    <v-icon name="bi-clock-fill" class="w-6 h-6 text-[#3D3A35] mr-2" />
                    <p>{{ time }}</p>
                </div>
            </div>
            <span class="mt-5">{{ shortdesc }}</span>
            <button class="rounded-md bg-[#2E2A27] px-5 py-1 font-semibold mt-5 text-white">
                Zistiť viac
            </button>
        </div>
    </div>
</template>