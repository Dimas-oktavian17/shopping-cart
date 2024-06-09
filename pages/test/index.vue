<script setup lang="ts">

const title = ref<any>('');
const router = useRouter();
const route = useRoute();

const { data } = await useAsyncData(
    'products',
    () => $fetch('https://api.escuelajs.co/api/v1/products', {
        params: {
            title: title.value
        }
    }), {
    watch: [title]
}
);
watch(title, (newTitle: string) => {
    router.push({ query: { ...route.query, title: newTitle } })
})
</script>

<template>
    <input type="text" v-model="title" class="self-start w-6 h-auto">
    <pre class="text-white">{{ data }}</pre>
</template>
