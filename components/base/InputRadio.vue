<script setup>
const useFilterStores = useFilterStore()
const { RadioFilter } = storeToRefs(useFilterStores)
</script>
<template>
    <div class="flex items-center mb-4 ml-3">
        <input v-model="RadioFilter" checked id="default-radio-1" type="radio" value="all" name="default-radio"
            class="w-4 h-4">
        <label for="default-radio-1"
            class="text-sm font-medium text-primary-title checked:text-secondary-billing ms-2">Default
        </label>
    </div>
    <div class="flex items-center mb-4 ml-3">
        <input v-model="RadioFilter" id="default-radio-1" type="radio" value="descending" name="default-radio"
            class="w-4 h-4 bg-red-500">
        <label for="default-radio-1" class="text-sm font-medium text-primary-title checked:text-secondary-billing ms-2">
            Price: high to low
        </label>
    </div>
    <div class="flex items-center mb-4 ml-3">
        <input v-model="RadioFilter" id="default-radio-1" type="radio" value="ascending" name="default-radio"
            class="w-4 h-4 bg-red-500">
        <label for="default-radio-1" class="text-sm font-medium text-primary-title checked:text-secondary-billing ms-2">
            Price: low to high
        </label>
    </div>
</template>
