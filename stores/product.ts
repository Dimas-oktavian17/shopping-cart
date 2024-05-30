export const useProductStore = defineStore('products', () => {
    // ? State
    const products = ref()
    const cart = ref<object[]>([])
    // ? getters
    const ProdutsData = computed(() => products.value)
    // ? actions
    const fetch = async () => {
        const { data } = await useFetch('/api/product')
        products.value = data.value
    }
    const HandleProducts = (title: string, stok: number, price: number) => {
        const ProductMenu = ProdutsData.value.find((item: any) => item.title === title)
        if (stok > 0) {
            ProductMenu.stok--
            cart.value.push({
                nama: title,
                harga: Number(price),
                jumlah: Number(1)
            })
            ProductMenu.stok === 0 || ProductMenu.stok < 0 ? ProductMenu.status = false : ProductMenu.status = true
            console.log(ProductMenu.status);
        }
    }
    // ? return data
    return {
        ProdutsData,
        fetch,
        HandleProducts,
        products,
        cart
    }
})