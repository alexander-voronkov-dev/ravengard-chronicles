<template>
  <div class="corner corner--tl" />
  <div class="corner corner--tr" />
  <div class="corner corner--bl" />
  <div class="corner corner--br" />
</template>

<style scoped lang="stylus">
.corner
  position absolute
  width 1rem
  height 1rem
  border-color unquote("color-mix(in srgb, var(--color-primary) 40%, transparent)")

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
</style>
