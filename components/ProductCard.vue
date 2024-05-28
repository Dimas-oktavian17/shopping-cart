<script setup>
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});
const { data:
    { id,
        logo,
        title,
        deskripsi,
        price,
        stok,
        checkout,
        status }
} = props
</script>
<template>
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex flex-col items-center bg-[#F5F5F7]">
            <img class="rounded-t-lg size-40" src="../public/favicon.ico" alt="" />
        </div>
        <div class="p-5">
            <div class="flex flex-row items-center justify-between">
                <h5 class="w-1/2 mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {{ title }}
                </h5>
                <h5 class="w-1/2 mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {{ stok }}
                </h5>
            </div>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {{ deskripsi }}
            </p>
            <a href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </a>
        </div>
    </div>
</template>