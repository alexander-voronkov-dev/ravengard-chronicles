<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    x: number
    y: number
    /** door opening width */
    w?: number
    /** wall direction the door is set in: 'h' = horizontal wall, 'v' = vertical wall */
    dir?: 'h' | 'v'
    /** which way the door swings open */
    swing?: 'up' | 'down' | 'left' | 'right'
  }>(),
  { w: 14, dir: 'h', swing: 'right' },
)

const gap = computed(() => {
  const { x, y, w, dir } = props
  return dir === 'h'
    ? { x1: x - w / 2, y1: y, x2: x + w / 2, y2: y }
    : { x1: x, y1: y - w / 2, x2: x, y2: y + w / 2 }
})

const leaf = computed(() => {
  const { x, y, w, dir, swing } = props
  if (dir === 'h') {
    return swing === 'down'
      ? { x1: x - w / 2, y1: y, x2: x + w / 2, y2: y + w }
      : { x1: x - w / 2, y1: y, x2: x + w / 2, y2: y - w }
  }
  return swing === 'right'
    ? { x1: x, y1: y - w / 2, x2: x + w, y2: y + w / 2 }
    : { x1: x, y1: y - w / 2, x2: x - w, y2: y + w / 2 }
})
</script>

<template>
  <g>
    <line v-bind="gap"  class="map-door-gap" />
    <!-- <line v-bind="leaf" class="map-door-arc" /> -->
  </g>
</template>
