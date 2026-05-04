<script setup lang="ts">
const props = withDefaults(
  defineProps<{ x: number; y: number; r?: number }>(),
  { r: 26 },
)
</script>

<template>
  <g :transform="`translate(${x} ${y})`">
    <circle :r="r"       fill="none" stroke="#6b4a2b" stroke-width="0.8" />
    <circle :r="r * 0.7" fill="none" stroke="#8a6b48" stroke-width="0.5" stroke-dasharray="2 2" />
    <path :d="`M 0 ${-r} L 4 0 L 0 ${r} L -4 0 Z`"  fill="#3a2410" opacity="0.9" />
    <path :d="`M ${-r} 0 L 0 -4 L ${r} 0 L 0 4 Z`"  fill="#6b4a2b" opacity="0.7" />
    <text x="0"       :y="-r - 6"  text-anchor="middle" font-family="IM Fell English SC" font-size="11" fill="#3a2410">С</text>
    <text x="0"       :y="r + 13"  text-anchor="middle" font-family="IM Fell English SC" font-size="11" fill="#3a2410">Ю</text>
    <text :x="-r - 8" y="4"        text-anchor="middle" font-family="IM Fell English SC" font-size="11" fill="#3a2410">З</text>
    <text :x="r + 8"  y="4"        text-anchor="middle" font-family="IM Fell English SC" font-size="11" fill="#3a2410">В</text>
  </g>
</template>
