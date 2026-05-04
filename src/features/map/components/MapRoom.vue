<script setup lang="ts">
const props = defineProps<{
  id: string
  points: string
  selected?: boolean
  inert?: boolean
}>()

const emit = defineEmits<{ select: [id: string] }>()
</script>

<template>
  <polygon
    :points="points"
    :class="['map-room', { selected, 'map-room--inert': inert }]"
    @click="!inert && emit('select', id)"
  />
</template>
