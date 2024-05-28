<script setup lang="ts">
const { data } = await useFetch('/api/product')
</script>

<template>
    <!-- <pre>{{ data }}</pre> -->
    <ul>
        <li v-for="({
            id,
            logo,
            title,
            deskripsi,
            price,
            stok,
            checkout,
            status,
        }) in data" :key="id">
            {{ title }}
        </li>
    </ul>
    <ProductCard></ProductCard>
</template>
