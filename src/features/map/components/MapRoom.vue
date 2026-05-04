<script setup lang="ts">
defineProps<{
  id: string
  points: string
  inert?: boolean
}>()
</script>

<template>
  <polygon :points="points" :class="['map-room', { 'map-room--inert': inert }]" />
</template>
