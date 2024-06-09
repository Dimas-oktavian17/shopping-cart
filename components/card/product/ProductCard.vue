<script setup>
const useProductStores = useProductStore()
// Access the store
const store = useTesStore();
// Ensure the initial fetch is performed
await callOnce(store.storeFetch)
const { result } = storeToRefs(store)
const HandleProduct = (title, price, description, category, images, id) => useProductStores.HandleProducts(title, price, description, category, images, id)
</script>
<template>
    <div class="max-w-xs bg-white rounded-lg shadow dark:bg-gray-800"
        v-for="({ title, price, description, category, images, id }) in result" :key="id">
        <div class="flex flex-col items-center bg-[#F5F5F7] dark:bg-gray-600 rounded-t-lg py-8">
            <!-- <Icon :name="result.logo" class="text-gray-800 dark:text-white" /> -->
            <div v-if="Array.isArray(images) && images.length > 0">
                <NuxtImg :src="images[0]" placeholder preload format="webp" quality="100"
                    class="rounded-full size-32" />
            </div>
        </div>
        <div class="p-5">
            <div class="flex flex-row items-center justify-between">
                <h5 class="w-full mb-2 text-lg font-semibold tracking-tight text-primary-payment dark:text-white">
                    {{ truncate(title) }}
                </h5>
            </div>
            <p class="mb-3 font-medium text-secondary-text dark:text-gray-400">
                {{ category.name }}
            </p>
            <div class="flex flex-row items-center justify-between">
                <div class="flex flex-col items-start w-1/2">
                    <h5 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                        {{ price }}
                        <span class="text-sm text-green-800 dark:text-green-300">
                            Available
                        </span>
                    </h5>
                </div>
                <!-- btn -->
                <div class="flex flex-col items-start w-1/2 ">
                    <BaseButton @actions="HandleProduct(title, price, description, category, images, id)"
                        class="p-3 rounded-full bg-[#2940D3] flex flex-col items-center justify-center">
                        <Icon name="ph:plus" class="w-4 h-4 text-white" />
                    </BaseButton>
                </div>
            </div>
        </div>
    </div>
</template>