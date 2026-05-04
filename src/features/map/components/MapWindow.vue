<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  x1: number
  y1: number
  x2: number
  y2: number
}>()

/** Unit normal perpendicular to the window line, scaled to frame depth */
const n = computed(() => {
  const dx = props.x2 - props.x1
  const dy = props.y2 - props.y1
  const len = Math.sqrt(dx * dx + dy * dy)
  return { x: (-dy / len) * 1.5, y: (dx / len) * 1.5 }
})
</script>

<template>
  <g>
    <!-- wall gap (parchment-coloured centre line) -->
    <line :x1="x1" :y1="y1" :x2="x2" :y2="y2" class="map-window-gap" />
    <!-- outer frame line -->
    <line
      :x1="x1 + n.x" :y1="y1 + n.y"
      :x2="x2 + n.x" :y2="y2 + n.y"
      class="map-window"
    />
    <!-- inner frame line -->
    <line
      :x1="x1 - n.x" :y1="y1 - n.y"
      :x2="x2 - n.x" :y2="y2 - n.y"
      class="map-window"
    />
  </g>
</template>
