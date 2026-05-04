<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    x: number
    y: number
    w: number
    h: number
    steps?: number
    /** 'h' = steps run horizontally (stair rises vertically), 'v' = opposite */
    orient?: 'h' | 'v'
  }>(),
  { steps: 8, orient: 'h' },
)

const lines = computed(() => {
  const result: { x1: number; y1: number; x2: number; y2: number }[] = []
  const { x, y, w, h, steps, orient } = props
  for (let i = 1; i < steps; i++) {
    if (orient === 'h') {
      const yy = y + (h * i) / steps
      result.push({ x1: x, y1: yy, x2: x + w, y2: yy })
    } else {
      const xx = x + (w * i) / steps
      result.push({ x1: xx, y1: y, x2: xx, y2: y + h })
    }
  }
  return result
})
</script>

<template>
  <g>
    <rect
      :x="x" :y="y" :width="w" :height="h"
      fill="rgba(255,245,215,0.2)"
      stroke="#3a2410"
      stroke-width="1.4"
    />
    <line v-for="(l, i) in lines" :key="i" v-bind="l" class="map-stair-step" />
    <!-- slot: place direction arrow + label here -->
    <slot />
  </g>
</template>
