// stores/product.ts
import type { CartType, product } from '@/types/productType';

export const useProductStore = defineStore('products', () => {
    // ? State
    const products = ref()
    const cart = ref<CartType[]>([])
    // ? getters
    const ProdutsData = computed(() => products.value)
    const CartProducts = computed(() => {
        return cart.value.reduce((a: any, b: CartType) => {
            const FindProduct = a.find((i: CartType) => i.nama === b.nama)
            if (FindProduct) {
                FindProduct.harga += b.harga
                FindProduct.jumlah += b.jumlah
            } else {
                a.push({ ...b })
            }
            return a
        }, [])
    })
    const TotalCart = computed((): number => CartProducts.value.reduce((a: number, b: CartType) => a + b.harga, 0))
    // ? actions 
    const fetch = async () => {
        const { data } = await useFetch('/api/product')
        products.value = data.value
    }
    const HandleProducts = (title: string, stok: number, price: number, logo: string, status: boolean) => {
        const ProductMenu = ProdutsData.value.find((item: product) => item.title === title)
        if (stok > 0) {
            ProductMenu.stok--
            cart.value.push({
                nama: title,
                harga: Number(price),
                jumlah: Number(1),
                logoIcon: logo,
                statusCart: status
            })
            ProductMenu.stok === 0 || ProductMenu.stok < 0 ? ProductMenu.status = false : ProductMenu.status = true
        }
    }
    const HandleProductsCarts = (nama: string, jumlah: number, harga: number, statusCart: boolean) => {
        const CartMenuIndex = cart.value.findIndex((item) => item.nama === nama)
        const ProductMenu = products.value.find((item: product) => item.title === nama)
        if (CartMenuIndex !== -1 && ProductMenu.status && ProductMenu) {
            // ? Get the product from the cart  
            const CartMenu = cart.value[CartMenuIndex]
            // Decrease the quantity, price and add stok in home menu
            CartMenu.jumlah += 1
            ProductMenu.stok -= 1
            CartMenu.harga += ProductMenu.price
            // ? if the quantity null will be removed from cart
            ProductMenu.stok === 0 ? CartMenu.statusCart = false : console.log(CartMenu.statusCart);
        } else {
            console.error('product not found');
        }
    }
    const HandleDeleteProducts = (nama: string, harga: number, jumlah: number) => {
        const CartMenuIndex = cart.value.findIndex((item) => item.nama === nama)
        const ProductMenu = products.value.find((item: product) => item.title === nama)
        if (CartMenuIndex !== -1 && ProductMenu) {
            // ? Get the product from the cart  
            const productMenu = cart.value[CartMenuIndex]
            // Decrease the quantity, price and add stok in home menu
            productMenu.jumlah -= 1
            ProductMenu.stok += 1
            productMenu.harga -= ProductMenu.price
            // ? if the quantity null will be removed from cart 
            productMenu.jumlah === 0 && cart.value.splice(CartMenuIndex, 1)
            ProductMenu.status = true
        } else {
            console.error('product not found');
        }
    }
    // ? return data
    return {
        ProdutsData,
        CartProducts,
        TotalCart,
        products,
        cart,
        fetch,
        HandleProducts,
        HandleProductsCarts,
        HandleDeleteProducts
    }
})