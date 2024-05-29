<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
const { data } = await useFetch('/api/product');
const products = ref(data.value);
</script>
<template>
    <section class="w-[70%]">
        <header class="text-2xl text-[#3A3C40] dark:text-white font-semibold mb-7">
            {{ title }}
        </header>
        <footer
            class="grid grid-cols-3 gap-4 px-2 py-4 bg-white rounded-lg shadow-lg place-items-center dark:bg-transparent">
            <div class="" v-for="product in products" :key="product.id">
                <CardProductCard :data="product" />
            </div>
        </footer>
    </section>
</template>