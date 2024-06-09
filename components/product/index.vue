<script setup>
const useProductStores = useProductStore()
const useFilterStores = useFilterStore()
await callOnce(useProductStores.fetch)
const { ProdutsData } = storeToRefs(useProductStores);
</script>
<template>
    <section class="w-[70%]">
        <Breadcrumb title="Uko Ecommerce"></Breadcrumb>
        <footer
            class="grid grid-cols-3 gap-4 px-2 py-4 bg-white rounded-lg shadow-lg place-items-center dark:bg-transparent">
            <div class="" v-for="product in ProdutsData" :key="product.id">
                <CardProductCard :data="product" />
            </div>
        </footer>
    </section>
</template>