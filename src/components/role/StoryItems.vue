<script setup lang="ts">
import type { RoleItem } from '@/composables/useStories'

defineProps<{ items: RoleItem[] }>()
</script>

<template>
  <div class="inventory">
    <!-- <h3 class="inventory__title">Инвентарь</h3> -->
    <div v-for="item in items" :key="item.name" class="item">
      <div class="item__icon">
        <img v-if="item.image" :src="item.image" :alt="item.name" class="item__img" />
        <span v-else class="item__placeholder">✦</span>
      </div>
      <div class="item__body">
        <p class="item__name">{{ item.name }}</p>
        <p v-if="item.description" class="item__desc">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
.inventory
  display flex
  flex-direction column
  width 100%
  text-align left
  padding 12px
  border 1px solid unquote("color-mix(in srgb, var(--color-primary) 20%, transparent)")
  border-radius 0.5rem

  &__title
    text-align center

.item
  display flex
  align-items flex-start
  gap 1rem
  padding 0.5rem 0.4rem
  border-bottom 1px solid unquote("color-mix(in srgb, var(--color-primary) 15%, transparent)")

  &:last-child
    border-bottom none

.item__icon
  flex-shrink 0
  height 56px
  aspect-ratio 1
  border-radius 0.35rem
  background unquote("color-mix(in srgb, var(--color-card) 70%, black 30%)")
  display flex
  align-items center
  justify-content center
  overflow hidden

.item__img
  width 80%
  height 80%
  object-fit contain
  display block

.item__placeholder
  font-size 1rem
  opacity 0.3
  color var(--color-primary)

.item__body
  flex 1
  min-width 0
  display flex
  flex-direction column
  gap 0.2rem
  padding-top 0.1rem

.item__name
  font-size 0.8rem
  font-weight 700
  color var(--color-text)
  line-height 1.3

.item__desc
  font-size 0.72rem
  line-height 1.5
  color unquote("color-mix(in srgb, var(--color-text) 65%, transparent)")
</style>
