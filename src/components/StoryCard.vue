<script setup lang="ts">
import type { StoryStatus } from '@/composables/useStories'
import SunCard from '@/ui-kit/SunCard.vue'
import SunBadge from '@/ui-kit/SunBadge.vue'
import SunDivider from '@/ui-kit/SunDivider.vue'
import SunDate from '@/ui-kit/SunDate.vue'

interface StoryCardProps {
  index: number
  icon: string
  title: string
  shortDescription: string
  branchId: string
  storyId: string
  status: StoryStatus
  level?: number
  gameDate?: string
}

defineProps<StoryCardProps>()
</script>

<template>
  <RouterLink :to="`/story/${branchId}/${storyId}`" class="card-link" :class="`card-link--${status}`">
    <SunCard hoverable class="story-card" :color="status === 'completed' ? '#6db87a' : undefined">
      <h3 class="card-title">{{ title }}</h3>
      <SunDate v-if="gameDate" :date="gameDate" class="game-date" />

      <SunDivider />

      <div class="text-center text-base leading-relaxed opacity-90 mb-6">
        {{ shortDescription }}
      </div>

      <SunBadge v-if="status === 'completed'" color="#6db87a" class="completed-badge mt-auto">
        ✓ Завершено
      </SunBadge>

      <SunBadge v-else-if="level" class="level-badge mt-auto">
        Рекомендованный уровень: {{ level }}
      </SunBadge>
    </SunCard>
  </RouterLink>
</template>

<style scoped lang="stylus">
.card-link
  display block

.card-link--archived
  opacity 0.45
  filter grayscale(0.6)

  &:deep(.sun-card):hover
    transform translateY(-2px)
    box-shadow 0 10px 24px rgba(0, 0, 0, 0.4)
    border-color unquote("color-mix(in srgb, var(--color-primary) 30%, transparent)")


.story-card
  height 100%
  min-height 30rem
  display flex
  flex-direction column

.card-title
  font-size clamp(2rem, 3vw, 2.45rem)
  line-height 1.08
  text-align center
  margin-bottom 0.55rem
  text-wrap balance

.game-date
  display block
  text-align center
  margin-bottom 0.75rem
</style>
