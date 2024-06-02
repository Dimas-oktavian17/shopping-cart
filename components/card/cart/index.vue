<script setup>
const useProductStores = useProductStore()
const { CartProducts } = storeToRefs(useProductStores)
const HandleDeleteProduct = (nama, harga, jumlah) => useProductStores.HandleDeleteProducts(nama, harga, jumlah)
const HandleProduct = (nama, jumlah, harga, statusCart) => useProductStores.HandleProductsCarts(nama, jumlah, harga, statusCart)
const img = useImage()
</script>
<template>
    <div v-if="!CartProducts.length" class="container flex flex-row items-center justify-center w-full gap-6 pb-8">
        <NuxtImg :placeholder="img(`/img/CartNull.svg`, { h: 1000, f: 'png', blur: 2, q: 50 })" src="/img/CartNull.svg"
            loading="lazy" format="webp" quality="100" class="w-auto h-auto" />
    </div>
    <aside v-else class="flex flex-col">
        <template v-for="({
            nama,
            harga,
            jumlah,
            logoIcon,
            statusCart
        }, index) in CartProducts" :key="index">
            <div
                class="container flex flex-row items-center justify-center w-full gap-6 pb-8 mb-4 bg-white rounded-lg shadow-lg">
                <div class="flex flex-row items-start w-1/2 pl-8">
                    <figure class="">
                        <Icon :name="logoIcon" class="text-black rounded-full size-[77px] bg-secondaryImage" />
                    </figure>
                    <article class="flex flex-col items-start pl-8">
                        <h1 class="text-lg font-semibold text-primary-title">{{ nama }}</h1>
                        <h3 class="text-lg font-semibold text-primary-title">{{ formatNumber(harga) }}</h3>
                        <p class="text-sm font-semibold text-secondary-text">
                            In Stock
                        </p>
                    </article>
                </div>
                <div class="flex flex-row items-center justify-center w-auto pl-52 pr-28">
                    <BaseButton @actions="HandleDeleteProduct(nama, harga, jumlah)"
                        class="grid p-3 rounded-lg bg-secondary-button pace-items-center">
                        <Icon name="ic:round-minus" class="text-secondary-second size-6" />
                    </BaseButton>
                    <span class="p-3 text-lg font-semibold text-primary-title">
                        {{ jumlah }}
                    </span>
                    <BaseButton :disabled="!statusCart" @actions="HandleProduct(nama, jumlah, harga, statusCart)"
                        class="grid p-3 rounded-lg bg-secondary-button place-items-center">
                        <Icon name="ph:plus" class="text-secondary-second size-6" />
                    </BaseButton>
                </div>
            </div>
        </template>
    </aside>
</template>