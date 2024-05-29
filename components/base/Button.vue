<script setup>
defineEmits(['actions'])
defineProps(['title', 'class'])
</script>
<template>
    <!--  -->
    <button @click="$emit('actions')" :class="class">
        {{ title }}
        <slot />
    </button>
</template>