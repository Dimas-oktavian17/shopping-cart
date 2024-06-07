<script setup>
const emit = defineEmits(['update:modelValue'])
const props = defineProps(
    {
        types: {
            type: String,
            default: 'search'
        },
        title: {
            type: String,
            required: true
        },
        modelValue: {
            type: String,
            required: true
        },

    })
const SearchProducts = (e) => emit('update:modelValue', e.target.value)
</script>
<template>
    <header class="max-w-md mx-auto mb-4">
        <label :for="title" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            {{ title }}
        </label>
        <div class="relative">
            <div class="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                <slot />
            </div>
            <input @input="SearchProducts" :type="types" :id="title"
                class="block w-full p-3 text-sm text-gray-900 rounded-lg placeholder:pl-4 ps-10 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Search products..." :value="modelValue" required />
        </div>
    </header>
</template>