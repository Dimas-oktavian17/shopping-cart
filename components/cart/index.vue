<script setup>
const useProductStores = useProductStore()
const { CartProducts } = storeToRefs(useProductStores)
</script>
<template>
    <section class="flex flex-col items-start w-full">
        <Breadcrumb title="Uko Ecommerce" />
        <div v-for="product in CartProducts" :key="product.id">
            <card-cart :data="product"></card-cart>
        </div>
    </section>
</template>