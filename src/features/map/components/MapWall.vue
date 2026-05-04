<script setup lang="ts">
defineProps<{
  d: string
  thick?: boolean
}>()
</script>

<template>
  <path :d="d" :class="thick ? 'map-wall-thick' : 'map-wall'" />
</template>
