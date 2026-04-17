<script setup lang="ts">
defineProps<{ level: number }>()
</script>

<template>
  <span class="level-badge">Уровень персонажей: {{ level }}</span>
</template>

<style scoped lang="stylus">
.level-badge
  display inline-block
  padding 0.25rem 0.75rem
  border 1px solid unquote("color-mix(in srgb, var(--color-primary) 35%, transparent)")
  border-radius 999px
  color var(--color-primary)
  font-size 0.72rem
  letter-spacing 0.1em
  text-transform uppercase
</style>
