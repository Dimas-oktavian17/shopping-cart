<script setup lang="ts">
const { data } = await useFetch('/api/product')
</script>

<template>
    <pre>{{ data }}</pre>
</template>
