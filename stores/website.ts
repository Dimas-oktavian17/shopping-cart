export const useCounterStore = defineStore('counter', () => {
    const product = ref([
        {
            id: 1,
            name: 'Oreo',
            price: 1000,
            stok: 3
        },
        {
            id: 2,
            name: 'Oreo',
            price: 1000,
            stok: 1
        },
    ])
    const name = ref('Eduardo')
    // const doubleCount = computed(() => count.value * 2)
    // function increment() {
    //     count.value++
    // }

    return { name, product }
})