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

const arc = computed(() => {
  const { x, y, w, dir, swing } = props
  if (dir === 'h') {
    return swing === 'down'
      ? `M ${x - w / 2} ${y} A ${w} ${w} 0 0 1 ${x + w / 2} ${y + w}`
      : `M ${x - w / 2} ${y} A ${w} ${w} 0 0 0 ${x + w / 2} ${y - w}`
  }
  return swing === 'right'
    ? `M ${x} ${y - w / 2} A ${w} ${w} 0 0 0 ${x + w} ${y + w / 2}`
    : `M ${x} ${y - w / 2} A ${w} ${w} 0 0 1 ${x - w} ${y + w / 2}`
})
</script>

<template>
  <g>
    <line v-bind="gap" class="map-door-gap" />
    <path :d="arc" class="map-door-arc" />
  </g>
</template>
