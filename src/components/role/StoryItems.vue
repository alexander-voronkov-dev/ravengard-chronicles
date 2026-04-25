<script setup lang="ts">
import type { RoleItem } from '@/composables/useStories'
import SunTooltip from '@/ui-kit/SunTooltip.vue'

defineProps<{ items: RoleItem[] }>()
</script>

<template>
  <div class="inventory">
    <SunTooltip v-for="item in items" :key="item.name" class="item">
      <img v-if="item.image" :src="item.image" :alt="item.name" class="item__img" />
      <span v-else class="item__placeholder">✦</span>

      <template #content>
        <p class="item__name">{{ item.name }}</p>
        <p v-if="item.description" class="item__desc">{{ item.description }}</p>
      </template>
    </SunTooltip>
  </div>
</template>

<style scoped lang="stylus">
.inventory
  display grid
  grid-template-columns repeat(3, 1fr)
  gap 0.4rem
  width 100%

.item
  aspect-ratio 1
  border-radius 0.4rem
  border 1px solid unquote("color-mix(in srgb, var(--color-primary) 22%, transparent)")
  background unquote("color-mix(in srgb, var(--color-card) 70%, black 30%)")
  display flex
  align-items center
  justify-content center
  cursor default
  transition border-color 0.15s ease

  &:hover
    border-color unquote("color-mix(in srgb, var(--color-primary) 60%, transparent)")

.item__img
  width 72%
  height 72%
  object-fit contain
  display block

.item__placeholder
  font-size 1.1rem
  opacity 0.3
  color var(--color-primary)
  
.item__name {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.2rem;
  white-space: nowrap;
}

.item__desc {
  font-size: 0.7rem;
  line-height: 1.45;
  color: unquote("color-mix(in srgb, var(--color-text) 70%, transparent)");
  white-space: normal;
}
</style>