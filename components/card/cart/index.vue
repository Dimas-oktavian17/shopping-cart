<script setup>
</script>
<template>
    <div class="container flex flex-row items-center justify-center gap-6 pb-8 bg-white rounded-lg shadow-lg">
        <div class="flex flex-row items-start w-1/2 pl-8">
            <figure class="">
                <Icon name="ph:plus" class="text-black rounded-full size-[77px] bg-secondaryImage" />
            </figure>
            <article class="flex flex-col items-start pl-8">
                <h1 class="text-lg font-semibold text-primary-title">Nike Air Max 120</h1>
                <h3 class="text-lg font-semibold text-primary-title">Rp.1000</h3>
                <p class="text-sm font-semibold text-secondary-text">In Stock</p>
            </article>
        </div>
        <div class="flex flex-row items-center justify-center w-1/2">
            <BaseButton @actions="" class="grid p-3 rounded-lg bg-secondary-button pace-items-center">
                <Icon name="ic:round-minus" class="text-secondary-second size-6" />
            </BaseButton>
            <span class="p-3 text-lg font-semibold text-primary-title">
                1
            </span>
            <BaseButton @actions="" class="grid p-3 rounded-lg bg-secondary-button place-items-center">
                <Icon name="ph:plus" class="text-secondary-second size-6" />
            </BaseButton>
        </div>
    </div>
</template>