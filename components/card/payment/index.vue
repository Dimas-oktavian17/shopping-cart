<script setup>
const useProductStores = useProductStore()
const { TotalCart } = storeToRefs(useProductStores)
const img = useImage()
</script>
<template>
    <!-- Container Order Summery Card -->
    <div class="container sticky top-0 flex flex-wrap justify-center w-[40%] gap-5 py-6 mx-auto mt-9 sm:justify-evenly">
        <!-- Order Summery Card -->
        <div class="bg-gray-200 rounded-lg shadow-lg w-80 h-max">
            <div class="p-5 bg-white rounded-t-lg part1">
                <h1 class="text-sm font-semibold name text-primary-payment">Order Summery</h1>
                <div class="mt-6 text-xs order">
                    <p class="float-right font-semibold text-primary-payment">{{ formatNumber(TotalCart) }} </p>
                    <h2 class="mb-3 font-semibold text-primary-title">Subtotal</h2>

                    <p class="float-right font-semibold"></p>
                    <h2 class="mb-3 font-semibold"></h2>

                    <p class="float-right font-semibold"></p>
                    <h2 class="mb-3 font-semibold"></h2>
                </div>
            </div>

            <div class="px-5 pt-3 mt-px bg-white rounded-b-lg">
                <p class="float-right font-semibold text-secondary-billing">{{ formatNumber(TotalCart) }}</p>
                <h2 class="text-sm font-semibold text-primary-payment">Total</h2>
                <div class="flex justify-center mt-8">
                    <button type="submit"
                        class="w-full py-2 text-xs font-semibold text-white rounded bg-primary-bulleted">Proceed
                        to payment</button>
                </div>
                <!-- Gambar Kalkulator -->
                <div class="flex justify-center py-12">
                    <div class="w-auto h-auto bg-blue-100 rounded-lg">
                        <NuxtImg :placeholder="img(`/img/PaymentIlustrations.svg`, { h: 10, f: 'png', blur: 2, q: 50 })"
                            src="/img/PaymentIlustrations.svg" loading="lazy" format="webp" quality="100"
                            class="w-auto h-auto" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>