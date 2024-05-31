export const useProductStore = defineStore('products', () => {
    // ? State
    const products = ref()
    const cart = ref<any[]>([])
    // ? getters
    const ProdutsData = computed(() => products.value)
    const CartProducts = computed(() => {
        return cart.value.reduce((a: any, b: any) => {
            const FindProduct: any = a.find((i: any) => i.nama === b.nama)
            if (FindProduct) {
                FindProduct.harga += b.harga
                FindProduct.jumlah += b.jumlah
            } else {
                a.push({ ...b })
            }
            return a
        }, [])
    })
    const TotalCart = computed(() => {
        return CartProducts.value.reduce((a: any, b: any) => a + b.harga, 0)
    })
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
        }
    }
    // ? return data
    return {
        ProdutsData,
        CartProducts,
        TotalCart,
        fetch,
        HandleProducts,
        products,
        cart
    }
})