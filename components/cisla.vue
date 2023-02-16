<script setup>
  defineProps(['button']);
</script>

<template>
    <div @click="$emit('buttonWasClicked', button)">
        {{ button.value }}
    </div>
</template>