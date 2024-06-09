<script setup>
const props = defineProps({
    data: {
        type: [Object, Array],
        required: true
    }
});
const result = computed(() => props.data.filter(i => i.name === 'Shoes' || i.name === 'Clothes' || i.name === 'Electronics' || i.name === 'Miscellaneous' || i.name === 'Furniture'))
const stores = useTesStore()
const { categoriey } = storeToRefs(stores)
watchEffect(() => console.log(categoriey.value))
</script>
<template>
    <div class="flex items-center mb-4 ml-3">
        <input v-model="categoriey" checked id="default-radio-2" type="radio" value="" name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="default-radio-2" class="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">Checked
            state</label>
    </div>
    <div class="flex items-center mb-4 ml-3" v-for="({ name, id }) in result" :key="id">
        <input v-model="categoriey" :id="name" type="radio" :value="id" name="default-radio" class="w-4 h-4">
        <label :for="name" class="text-sm font-medium text-primary-title checked:text-secondary-billing ms-2">
            {{ name }}
        </label>
    </div>
</template>
