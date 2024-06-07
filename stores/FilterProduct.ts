// stores/product.ts
import type { CartType, product } from '@/types/productType';

export const useFilterStore = defineStore('filter', () => {
    const useProductStores = useProductStore().products
    const SearchFilter = ref('')
    const RadioFilter = ref('')

    // ? return data
    return {
        useProductStores,
        SearchFilter,
        RadioFilter,

    }
})