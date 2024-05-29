<script setup lang="ts">
const { data } = await useFetch('/api/product');
const products = ref(data.value);
</script>

<template>
    <sidebar />
    <product title="Uko Ecommerce" />
</template>
