<template>
    <!-- Container Order Summery Card -->
    <div class="container flex flex-wrap justify-center gap-5 py-6 mx-auto mt-6 sm:justify-evenly">

        <!-- Order Summery Card -->
        <div class="bg-gray-200 rounded-lg shadow-lg w-80 h-max">
            <div class="p-5 bg-white rounded-t-lg part1">
                <h1 class="text-sm font-medium name">Order Summery</h1>
                <div class="mt-6 text-xs order">
                    <p class="float-right font-medium">$215</p>
                    <h2 class="mb-3 font-medium">Subtotal</h2>

                    <p class="float-right font-medium">15%</p>
                    <h2 class="mb-3 font-medium">Discount</h2>

                    <p class="float-right font-medium">$50</p>
                    <h2 class="mb-3 font-medium">Shipping cost</h2>
                </div>
            </div>

            <div class="px-5 pt-3 mt-px bg-white rounded-b-lg max-width">
                <p class="float-right font-medium text-blue-400">$285</p>
                <h2 class="text-sm font-medium">Total</h2>

                <div class="flex justify-center py-2 mt-8 bg-blue-700 rounded max-width">
                    <button type="submit" class="text-xs text-white">Proceed to payment</button>
                </div>

                <!-- Gambar Kalkulator -->
                <div class="flex justify-center">
                    <div class="w-40 h-20 mt-10 bg-blue-100">
                        <p class="text-xs">Ini adalah contoh gambar.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>