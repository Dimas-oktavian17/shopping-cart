<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
const route = useRouter()
</script>

<template>
    <header class="text-2xl text-[#3A3C40] dark:text-white font-semibold mb-7">
        <BaseButton @actions="route.back()"
            class="cursor-pointer transition-all hover:duration-1000 hover:underline text-2xl text-[#3A3C40] dark:text-white font-semibold ">
            Home
        </BaseButton>
        / {{ title }}
    </header>
</template>