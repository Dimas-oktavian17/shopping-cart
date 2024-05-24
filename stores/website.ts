export const useWebsiteStore = defineStore('websiteStore', {
    // state: () => ({
    //     name: '',
    //     description: ''
    // }),
    const name = ref('testing')
    // actions: {
    //     async fetch() {
    //         const infos = await $fetch('https://api.nuxt.com/modules/pinia')

    //         this.name = infos
    //         this.description = infos
    //     }
    // }
    return{
        name
    }
})
