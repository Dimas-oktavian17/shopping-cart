export const useProductStore = defineStore('products', () => {
    // ? State
    const products = ref()
    // ? getters
    // const products = computed(() => '')
    // ? actions
    const fetch = async () => {
        const { data } = await useFetch('/api/product')
        products.value = data.value
    }
    // ? return data
    return {
        fetch,
        products
    }
})