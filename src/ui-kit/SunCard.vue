<script setup lang="ts">
withDefaults(defineProps<{ tag?: string; hoverable?: boolean; color?: string }>(), {
  tag: 'div',
  hoverable: false,
  color: 'var(--color-primary)',
})
</script>

<template>
  <component
    :is="tag"
    class="sun-card"
    :class="{ 'sun-card--hoverable': hoverable }"
    :style="{ '--sun-card-color': color }"
  >
    <div class="corner corner--tl" />
    <div class="corner corner--tr" />
    <div class="corner corner--bl" />
    <div class="corner corner--br" />
    <slot />
  </component>
</template>

<style scoped lang="stylus">
.sun-card
  position relative
  padding clamp(1.5rem, 4vw, 2.6rem)
  background linear-gradient(180deg, unquote("color-mix(in srgb, var(--color-card) 92%, black 8%)"), var(--color-card))
  border 1px solid unquote("color-mix(in srgb, var(--sun-card-color) 36%, transparent)")
  border-radius 8px
  box-shadow 0 22px 40px rgba(0, 0, 0, 0.46), unquote("0 0 30px color-mix(in srgb, var(--sun-card-color) 14%, transparent)")

.corner
  position absolute
  width 1rem
  height 1rem
  color: var(--sun-card-color)

.corner--tl
  top 0.7rem
  left 0.7rem
  border-top 1px solid
  border-left 1px solid

.corner--tr
  top 0.7rem
  right 0.7rem
  border-top 1px solid
  border-right 1px solid

.corner--bl
  bottom 0.7rem
  left 0.7rem
  border-bottom 1px solid
  border-left 1px solid

.corner--br
  bottom 0.7rem
  right 0.7rem
  border-bottom 1px solid
  border-right 1px solid

.sun-card.a
  cursor pointer

.sun-card--hoverable
  transition transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease

  &:hover
    transform translateY(-4px)
    border-color unquote("color-mix(in srgb, var(--sun-card-color) 68%, transparent)")
    box-shadow 0 18px 34px rgba(0, 0, 0, 0.5), unquote("0 0 0 1px color-mix(in srgb, var(--sun-card-color) 30%, transparent)"), unquote("0 0 24px color-mix(in srgb, var(--sun-card-color) 45%, transparent)")
</style>
