// stores/product.ts
import type { CartType, product } from '@/types/productType';

export const useFilterStore = defineStore('filter', () => {
    const Product = useProductStore().products
    const SearchFilter = ref('')
    const RadioFilter = ref('')
    const FilterProduct = computed(() => {
        return Product.filter((item: any) => item.title.toLowerCase().includes(SearchFilter.value.toLowerCase()))
    })
    // ? return data
    return {
        SearchFilter,
        RadioFilter,
        Product,
        FilterProduct
    }
})