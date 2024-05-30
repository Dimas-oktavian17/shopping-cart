<script setup lang="ts">
function mode(theme: string) {
    useColorMode().preference = theme;
}
</script>
<template>
    <nav class="bg-transparent dark:bg-gray-800">
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
            <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Dashboard</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button"
                class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul
                    class="flex flex-col p-4 mt-4 font-medium bg-transparent rounded-lg md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
                    <li>
                        <button type="button" aria-label="switchMode" @click="
                            mode($colorMode.preference === 'dark' ? 'light' : 'dark')
                            " class="group lg:pr-4">
                            <!-- moon -->
                            <span v-if="$colorMode.preference === 'light' && 'light'">
                                <Icon name="ph:moon-fill"
                                    class="block transition-all group-hover:rotate-12 dark:text-white" />
                            </span>
                            <span v-else-if="$colorMode.preference === 'dark' && 'dark'">
                                <!-- sun -->
                                <Icon name="ph:sun-fill"
                                    class="block text-white transition-all group-hover:rotate-12" />
                            </span>
                        </button>
                    </li>
                    <li>
                        <NuxtLink to="/cart"
                            class="relative block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            <Icon name="bi:cart" class="w-6 h-6 text-gray-800 dark:text-white" />
                            <span
                                class="absolute inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full -right-3 -top-2">
                                1
                            </span>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>