<script setup lang="ts">
import type { InfoCard } from '@/composables/useStories'

defineProps<{ cards: InfoCard[] }>()
</script>

<template>
  <section v-if="cards.length" class="mt-11">
    <div class="flex flex-wrap items-end gap-4 mb-4 border-b border-white/8 pb-2">
      <h2 class="text-3xl font-bold">Лор</h2>
    </div>

    <div class="grid gap-4 grid-cols-3 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
      <article
        v-for="card in cards"
        :key="card.title"
        class="info-card"
        :class="{ 'info-card--wide': card.type === 'wide' }"
      >
        <img v-if="card.image" :src="card.image" :alt="card.title" class="info-card__image" />
        <div class="info-card__body">
          <h3 class="info-card__title">{{ card.title }}</h3>
          <p class="info-card__description">{{ card.description }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped lang="stylus">
.info-card
  position relative
  overflow hidden
  border-radius 0.75rem
  border 1px solid unquote("color-mix(in srgb, var(--color-primary) 22%, transparent)")
  background unquote("color-mix(in srgb, var(--color-card) 80%, black 20%)")
  display flex
  flex-direction column
  transition border-color 0.2s ease, box-shadow 0.2s ease

  &:hover
    border-color unquote("color-mix(in srgb, var(--color-primary) 50%, transparent)")
    box-shadow unquote("0 8px 24px color-mix(in srgb, var(--color-primary) 10%, transparent)")

.info-card__image
  width 100%
  aspect-ratio 16 / 9
  height auto
  object-fit cover
  display block
  border-bottom 1px solid unquote("color-mix(in srgb, var(--color-primary) 18%, transparent)")

.info-card__body
  padding 1rem 1.1rem
  display flex
  flex-direction column
  gap 0.5rem
  flex 1

.info-card__title
  font-family 'Cormorant Garamond', serif
  font-size 1.4rem
  font-weight 700
  color var(--color-text)
  line-height 1.25
  letter-spacing 0.03em

.info-card--wide
  grid-column 1 / -1
  flex-direction row

  .info-card__image
    width 280px
    height auto
    flex-shrink 0
    border-bottom none
    border-right 1px solid unquote("color-mix(in srgb, var(--color-primary) 18%, transparent)")

.info-card__description
  font-size 0.93rem
  line-height 1.68
  color unquote("color-mix(in srgb, var(--color-text) 75%, transparent)")
</style>
