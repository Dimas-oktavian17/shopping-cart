<script setup>
const props = defineProps({
    data: {
        type: [Object, Array],
        required: true
    }
});
const result = computed(() => props.data)
</script>
<template>
    <div class="container flex flex-row items-center justify-center w-full gap-6 pb-8 bg-white rounded-lg shadow-lg">
        <div class="flex flex-row items-start w-1/2 pl-8">
            <figure class="">
                <Icon name="ph:plus" class="text-black rounded-full size-[77px] bg-secondaryImage" />
            </figure>
            <article class="flex flex-col items-start pl-8">
                <h1 class="text-lg font-semibold text-primary-title">{{ result.nama }}</h1>
                <h3 class="text-lg font-semibold text-primary-title">{{ result.harga }}</h3>
                <p class="text-sm font-semibold text-secondary-text">In Stock</p>
            </article>
        </div>
        <div class="flex flex-row items-center justify-center w-auto pl-52 pr-28">
            <BaseButton @actions="" class="grid p-3 rounded-lg bg-secondary-button pace-items-center">
                <Icon name="ic:round-minus" class="text-secondary-second size-6" />
            </BaseButton>
            <span class="p-3 text-lg font-semibold text-primary-title">
                {{ result.jumlah }}
            </span>
            <BaseButton @actions="" class="grid p-3 rounded-lg bg-secondary-button place-items-center">
                <Icon name="ph:plus" class="text-secondary-second size-6" />
            </BaseButton>
        </div>
    </div>
</template>