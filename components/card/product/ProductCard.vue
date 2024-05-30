<script setup>
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});
const { data:
    {
        id,
        logo,
        title,
        deskripsi,
        price,
        stok,
        checkout,
        status
    } } = props
</script>
<template>
    <div class="max-w-xs bg-white rounded-lg shadow dark:bg-gray-800">
        <div class="flex flex-col items-center bg-[#F5F5F7] dark:bg-gray-600 rounded-t-lg py-8">
            <Icon :name="logo" class="w-12 h-auto text-gray-800 dark:text-white" />
        </div>
        <div class="p-5">
            <div class="flex flex-row items-center justify-between">
                <h5 class="w-full mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {{ title }}
                </h5>
                <!-- <h5 class="w-1/2 mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {{ stok }}
                </h5> -->
            </div>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {{ deskripsi }}
            </p>
            <div class="flex flex-row items-center justify-between">
                <div class="flex flex-col items-start w-1/2">
                    <h5 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                        Rp.{{ price }}
                    </h5>
                </div>
                <!-- btn -->
                <div class="flex flex-col items-start w-1/2">
                    <BaseButton @actions=""
                        class="p-3 rounded-full bg-[#2940D3] flex flex-col items-center justify-center">
                        <Icon name="ph:plus" class="w-4 h-4 text-white" />
                    </BaseButton>
                </div>
            </div>
        </div>
    </div>
</template