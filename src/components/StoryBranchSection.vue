<script setup lang="ts">
import type { StoryBranch } from '@/composables/useStories'
import StoryCard from './StoryCard.vue'
import SunCard from '@/ui-kit/SunCard.vue'

defineProps<{ branch: StoryBranch }>()
</script>

<template>
  <section class="branch">
    <div class="branch__header">
      <div class="branch__title-row">
        <span class="branch__deco branch__deco--left" aria-hidden="true" />
        <span class="branch__glyph" aria-hidden="true">◈</span>
        <h2 class="branch__title">{{ branch.title }}</h2>
        <span class="branch__glyph" aria-hidden="true">◈</span>
        <span class="branch__deco branch__deco--right" aria-hidden="true" />
      </div>
      <p v-if="branch.tagline" class="branch__tagline">{{ branch.tagline }}</p>
    </div>

    <div class="branch__grid">
      <StoryCard
        v-for="(story, i) in branch.stories"
        :key="story.id"
        :index="i + 1"
        :icon="story.icon"
        :title="story.title"
        :short-description="story.shortDescription"
        :story-id="story.id"
        :status="story.status"
        :level="story.level"
        :game-date="story.gameDate"
      />

      <SunCard v-if="branch.isComingSoon" class="coming-soon">
        <p class="coming-soon__label">Продолжение<br>следует...</p>
        <!-- <span class="coming-soon__dots">· · ·</span> -->
      </SunCard>
    </div>
  </section>
</template>

<style scoped lang="stylus">
.branch
  width 100%

/* ── Header ──────────────────────────────────────────── */
.branch__header
  display flex
  flex-direction column
  align-items center
  gap 0.45rem
  margin-bottom 1.5rem

.branch__title-row
  display flex
  align-items center
  gap 0.75rem
  width 100%

.branch__deco
  flex 1
  height 1px

.branch__deco--left
  background linear-gradient(to right, transparent, unquote("color-mix(in srgb, var(--color-primary) 40%, transparent)"))

.branch__deco--right
  background linear-gradient(to left, transparent, unquote("color-mix(in srgb, var(--color-primary) 40%, transparent)"))

.branch__glyph
  color var(--color-primary)
  opacity 0.55
  font-size 0.7rem
  flex-shrink 0

.branch__title
  font-size clamp(0.75rem, 1.5vw, 0.9rem)
  font-weight 600
  letter-spacing 0.18em
  text-transform uppercase
  color var(--color-primary)
  opacity 0.75
  white-space nowrap
  flex-shrink 0

.branch__tagline
  font-size 0.75rem
  color var(--color-text)
  opacity 0.4
  font-style italic
  letter-spacing 0.04em

/* ── Grid ────────────────────────────────────────────── */
.branch__grid
  display grid
  grid-template-columns repeat(3, 1fr)
  gap 1.25rem

  @media (max-width: 1080px)
    grid-template-columns repeat(2, 1fr)

  @media (max-width: 640px)
    grid-template-columns 1fr

/* ── Coming soon card ────────────────────────────────── */
.coming-soon
  min-height 30rem
  display flex
  flex-direction column
  align-items center
  justify-content center
  gap 1.25rem
  opacity 0.35
  cursor default
  border-style dashed

.coming-soon__dots
  font-size 1.5rem
  letter-spacing 0.4em
  color var(--color-primary)

.coming-soon__label
  font-size 1.1rem
  font-weight 600
  text-align center
  line-height 1.4
  letter-spacing 0.06em
  color var(--color-text)
</style>
