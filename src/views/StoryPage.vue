<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStories } from '@/composables/useStories'
import StoryRolesSection from '@/components/role/StoryRolesSection.vue'
import StoryInfoCardsSection from '@/components/StoryInfoCardsSection.vue'
import StoryGallery from '@/components/StoryGallery.vue'
import SunCard from '@/ui-kit/SunCard.vue'
import SunBadge from '@/ui-kit/SunBadge.vue'
import SunDivider from '@/ui-kit/SunDivider.vue'
import SunDate from '@/ui-kit/SunDate.vue'

const { getStories } = useStories()
const stories = getStories()

const route = useRoute()
const storyId = computed(() => String(route.params.storyId ?? ''))
const story = computed(() => stories.find((s) => s.id === storyId.value))
const storyParagraphs = computed(() => story.value?.description.split('\n\n') ?? [])
</script>

<template>
  <main class="story-page">
    <RouterLink to="/" class="back-link">← Вернуться к историям</RouterLink>

    <SunCard v-if="story" tag="article">
      <header class="article__header">
        <h1 class="article__title">{{ story.title }}</h1>
        <SunDate v-if="story.gameDate" :date="story.gameDate" class="article__game-date" />
        <SunBadge v-if="story.level" class="article__level">Рекомендованный уровень: {{ story.level }}</SunBadge>
      </header>

      <SunDivider />

      <section class="article__content">
        <p v-for="paragraph in storyParagraphs" :key="paragraph">{{ paragraph }}</p>
      </section>

      <StoryGallery v-if="story.gallery" :images="story.gallery" />
      <StoryInfoCardsSection v-if="story.infoCards" :cards="story.infoCards" />
      <StoryRolesSection v-if="story.roles" :roles="story.roles" />
    </SunCard>

    <SunCard v-else class="article--missing">
      <h1 class="article__title">История не найдена</h1>
      <p class="article__lead">Возможно, ссылка устарела или была введена с ошибкой.</p>
    </SunCard>
  </main>
</template>

<style scoped lang="stylus">
.story-page
  width 100%
  padding clamp(1rem, 3vw, 1.8rem) 0 1rem

.back-link
  display inline-flex
  align-items center
  gap 0.4rem
  margin-bottom 1.2rem
  color unquote("color-mix(in srgb, var(--color-text) 82%, var(--color-primary) 18%)")
  font-size 0.9rem
  letter-spacing 0.06em
  text-transform uppercase
  transition color 0.2s ease

  &:hover
    color var(--color-primary)

.article__header
  text-align center
  margin-bottom 1.2rem

.article__icon
  font-size 2.6rem
  margin-bottom 0.4rem

.article__title
  color var(--color-text)
  font-size clamp(2rem, 5vw, 3.2rem)
  line-height 1.05
  margin-bottom 0.5rem
  text-wrap balance
  white-space pre-line


.article__game-date
  display block
  margin-top 0.5rem

.article__level
  margin-top 0.75rem


.article__lead
  color unquote("color-mix(in srgb, var(--color-text) 85%, #000 15%)")
  font-size 1.03rem
  line-height 1.65
  text-align center
  margin-bottom 1.3rem
  font-style italic

.article__content
  display grid
  gap 1.15rem

  p
    color unquote("color-mix(in srgb, var(--color-text) 92%, #000 8%)")
    font-size 1.03rem
    line-height 1.75
    white-space pre-line

.article--missing
  text-align center

@media (max-width 760px)
  .article__content p
    font-size 0.98rem
    line-height 1.68
</style>
