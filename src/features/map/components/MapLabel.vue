<script setup lang="ts">
withDefaults(
  defineProps<{
    x: number
    y: number
    size?: 'normal' | 'small' | 'tiny'
    sub?: string
    muted?: boolean
  }>(),
  { size: 'normal' },
)
</script>

<template>
  <g>
    <text
      :x="x"
      :y="y"
      :class="['map-room-label', size !== 'normal' ? size : '']"
      :fill="muted ? '#8a6b48' : undefined"
    >
      <slot />
    </text>
    <text v-if="sub" :x="x" :y="y + 13" class="map-room-sublabel">{{ sub }}</text>
  </g>
</template>
