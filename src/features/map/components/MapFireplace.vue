<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    x: number
    y: number
    w?: number
    h?: number
    /** which wall the firebox faces */
    side?: 'top' | 'bottom' | 'left' | 'right'
  }>(),
  { w: 30, h: 12, side: 'top' },
)

const arch = computed(() => {
  const { x, y, w, h, side } = props
  switch (side) {
    case 'top':    return `M ${x + 4} ${y + h} Q ${x + w / 2} ${y + h + 8} ${x + w - 4} ${y + h}`
    case 'bottom': return `M ${x + 4} ${y}     Q ${x + w / 2} ${y - 8}      ${x + w - 4} ${y}`
    case 'left':   return `M ${x + w} ${y + 4} Q ${x + w + 8} ${y + h / 2} ${x + w} ${y + h - 4}`
    case 'right':  return `M ${x}     ${y + 4} Q ${x - 8}     ${y + h / 2} ${x}     ${y + h - 4}`
  }
})
</script>

<template>
  <g>
    <rect :x="x" :y="y" :width="w" :height="h" class="map-fireplace" />
    <path :d="arch" class="map-fireplace-arch" />
  </g>
</template>
