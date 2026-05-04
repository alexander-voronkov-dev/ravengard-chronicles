<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    x: number
    y: number
    w?: number
  }>(),
  { w: 28 },
)
</script>

<template>
  <g>
    <line :x1="x - w / 2" :y1="y" :x2="x + w / 2" :y2="y" class="map-door-gap" />
    <path :d="`M ${x - w / 2} ${y} A ${w / 2} ${w / 2} 0 0 1 ${x} ${y + w / 2}`" class="map-door-arc" />
    <path :d="`M ${x + w / 2} ${y} A ${w / 2} ${w / 2} 0 0 0 ${x} ${y + w / 2}`" class="map-door-arc" />
  </g>
</template>
