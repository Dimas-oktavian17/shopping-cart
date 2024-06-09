// stores/product.ts
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export const useTesStore = defineStore('tes', () => {
    const categories = ref()
    const categoriey = ref()
    const priceMin = ref()
    const priceMax = ref()
    const result = ref<any>(null);
    const title = ref<any>('');
    const router = useRouter();
    const route = useRoute();

    const storeFetch = async () => {
        const response = await $fetch('https://api.escuelajs.co/api/v1/products', {
            params: {
                title: title.value,
                categoryId: categoriey.value,
                price_min: priceMin.value,
                price_max: priceMax.value,
            },
        });
        if (Array.isArray(response)) {
            response.forEach(product => {
                if (product.images && typeof product.images === 'string') {
                    product.images = JSON.parse(product.images);
                }
            });
        }
        result.value = response
    };
    const categoryFetch = async () => {
        const { data } = await useFetch('https://api.escuelajs.co/api/v1/categories')
        categories.value = data.value
    }
    // Initialize title from query parameter
    title.value = route.query.title || '';
    categories.value = route.query.categoriey || '';
    priceMax.value = route.query.priceMax || '';
    priceMin.value = route.query.priceMin || '';

    // Watch for changes in title and fetch data
    watch([title, categoriey, priceMin, priceMax], useDebounceFn(async ([newTitle, newCategory, newMinPrice, newMaxPrice]) => {
        router.push({
            query: {
                ...route.query,
                title: newTitle,
                categoriey: newCategory,
                price_min: newMinPrice,
                price_max: newMaxPrice,
            }
        });
        await storeFetch();
    }, 1000, { maxWait: 5000 }));
    // Fetch data initially
    storeFetch();

    return {
        title,
        result,
        categories,
        storeFetch,
        categoryFetch,
        categoriey,
        priceMax,
        priceMin
    };
});
