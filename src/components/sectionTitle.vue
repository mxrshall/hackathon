<script>
export default {
  name: "Title",
  props: {
    text: { type: String, required: true },
  }
};
</script>

<template>
    <h1 class="text-center text-5xl font-bold md:text-5xl md:my-6">
        {{ text }}
    </h1>
</template>