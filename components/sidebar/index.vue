<script setup>
const useFilterStores = useTesStore()
const { title, categories, priceMax, priceMin } = storeToRefs(useFilterStores)
await callOnce(useFilterStores.categoryFetch)
</script>
<template>
    <aside id="default-sidebar" class=" w-[30%] h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">
        <BaseInput v-model="title" title="Search">
            <Icon name="ic:round-search" class="mr-8 text-gray-200 size-8" />
        </BaseInput>
        <div class="h-full px-3 py-4 overflow-y-auto rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <li
                    class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <span class="ms-3">Category</span>
                </li>
                <li
                    class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <span class="ms-3">Sort By</span>
                </li>
                <BaseInputRadio :data="categories" />

                <li
                    class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <span class="ms-3">Price Range</span>
                </li>
                <li>
                    <BaseInput types="number" v-model="priceMin" title="Minimal Price">
                        <Icon name="ic:round-monetization-on" class="mr-8 text-gray-200 size-8" />
                    </BaseInput>
                </li>
                <li>
                    <BaseInput types="number" v-model="priceMax" title="Maximal Price">
                        <Icon name="ic:round-monetization-on" class="mr-8 text-gray-200 size-8" />
                    </BaseInput>
                </li>
            </ul>


            <RouterLink to="/cart"
                class="block w-full px-4 py-4 text-sm text-center text-white rounded-lg bg-primary-bulleted">View
                Cart
            </RouterLink>
        </div>
    </aside>

</template>