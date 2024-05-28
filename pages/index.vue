<script setup lang="ts">
const { data } = await useFetch('/api/product');
const products = ref(data.value);
</script>

<template>
    <div>
        <div v-for="product in products" :key="product.id">
            <ProductCard :data="product" />
        </div>
    </div>
</template>
