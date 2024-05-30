<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <header class="text-2xl text-[#3A3C40] dark:text-white font-semibold mb-7">
        {{ title }}
    </header>
</template>