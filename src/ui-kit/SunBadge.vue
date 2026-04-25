<script setup lang="ts">
export type BadgeVariant = 'outline' | 'filled'

withDefaults(defineProps<{
  variant?: BadgeVariant
  color?: string
}>(), {
  variant: 'outline',
  color: 'var(--color-primary)',
})
</script>

<template>
  <span class="badge" :class="`badge--${variant}`" :style="{ '--badge-color': color }">
    <slot />
  </span>
</template>

<style scoped lang="stylus">
.badge
  display inline-block
  padding 0.4rem 0.7rem
  border-radius 999px
  font-size 0.7rem
  font-weight 600
  letter-spacing 0.09em
  text-transform uppercase
  line-height 1.6
  text-align center

.badge--outline
  border 1px solid unquote("color-mix(in srgb, var(--badge-color) 45%, transparent)")
  background unquote("color-mix(in srgb, var(--badge-color) 10%, transparent)")
  color var(--badge-color)

.badge--filled
  border 1px solid transparent
  background var(--badge-color)
  color #fff
</style>
