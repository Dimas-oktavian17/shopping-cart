export const useProductStore = defineStore('products', () => {
    // ? State
    const data = ref()
    const cart = ref()
    // ? getters
    const products = computed(() => '')
    // ? actions
    const HandleCart = () => ''
    const DeleteCart = () => ''
    // ? return data
    return {
        data,
        cart,
        products,
        HandleCart,
        DeleteCart
    }
})