<script setup lang="ts">
const props = defineProps<{
  id: string
  points: string
  selected?: boolean
  secret?: boolean
  inert?: boolean
}>()

const emit = defineEmits<{ select: [id: string] }>()
</script>

<template>
  <polygon
    :points="points"
    :class="[
      secret ? 'map-secret-room' : 'map-room',
      { selected, 'map-room--inert': inert },
    ]"
    @click="!inert && emit('select', id)"
  />
</template>
