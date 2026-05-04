<script setup lang="ts">
withDefaults(
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
    <!-- <line :x1="x - w / 2" :y1="y" :x2="x"          :y2="y + w / 2" class="map-door-arc" /> -->
    <!-- <line :x1="x + w / 2" :y1="y" :x2="x"          :y2="y + w / 2" class="map-door-arc" /> -->
  </g>
</template>
