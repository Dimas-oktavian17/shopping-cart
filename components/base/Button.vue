<script setup>
defineEmits(['actions'])
defineProps(['title', 'class', 'disabled'])
</script>
<template>
    <button :disabled="disabled" @click="$emit('actions')" :class="class">
        {{ title }}
        <slot />
    </button>
</template>