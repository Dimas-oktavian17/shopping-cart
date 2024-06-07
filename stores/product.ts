// stores/product.ts
import type { CartType, product } from '@/types/productType';
import { useFilterStore } from '@/stores/FilterProduct'
export const useProductStore = defineStore('products', () => {
    // ? State
    const products = ref()
    const cari = ref('');
    const cart = ref<CartType[]>([])
    const search: any = useFilterStore().SearchFilter
    // ? getters
    const ProdutsData = computed(() => products.value.filter((item: any) => item.title.toLowerCase().includes(cari.value.toLowerCase())))
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
    const DisableProduct = (ProductMenu: product, CartMenu: CartType) => {
        ProductMenu.stok === 0 || ProductMenu.stok < 0 ? ProductMenu.status = false : ProductMenu.status = true
        ProductMenu.stok === 0 || ProductMenu.stok < 0 ? CartMenu.statusCart = false : CartMenu.statusCart = true
    }
    const HandleProducts = (title: string, stok: number, price: number, logo: string, status: boolean) => {
        const ProductMenu = products.value.find((item: product) => item.title === title)
        const CartMenuIndex = cart.value.findIndex((item) => item.nama === title)
        const CartMenu = cart.value[CartMenuIndex]
        if (stok > 0) {
            ProductMenu.stok--
            cart.value.push({
                nama: title,
                harga: Number(price),
                jumlah: Number(1),
                logoIcon: logo,
                statusCart: status
            })
            // ? Disabled buttons if stok is null
            DisableProduct(ProductMenu, CartMenu)
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
            CartMenu.statusCart = true

            // ? if the quantity null will be removed from cart

            // ? Disabled buttons if stok is null
            DisableProduct(ProductMenu, CartMenu)
        } else {
            console.error('product not found');
        }
    }
    const HandleDeleteProducts = (nama: string, harga: number, jumlah: number) => {
        const CartMenuIndex = cart.value.findIndex((item) => item.nama === nama)
        const ProductMenu = products.value.find((item: product) => item.title === nama)
        if (CartMenuIndex !== -1 && ProductMenu) {
            // ? Get the product from the cart  
            const CartMenu = cart.value[CartMenuIndex]
            // Decrease the quantity, price and add stok in home menu
            CartMenu.jumlah -= 1
            ProductMenu.stok += 1
            CartMenu.harga -= ProductMenu.price
            // ? if the quantity null will be removed from cart 
            CartMenu.jumlah === 0 && cart.value.splice(CartMenuIndex, 1)
            // ? Disabled buttons if stok is null
            DisableProduct(ProductMenu, CartMenu)
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
        HandleDeleteProducts,
        DisableProduct,
        search,
        cari
    }
})