<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStories } from '@/composables/useStories'
import StoryRolesSection from '@/components/StoryRolesSection.vue'
import CornerFrame from '@/components/CornerFrame.vue'
import LevelBadge from '@/components/LevelBadge.vue'

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

    <article v-if="story" class="article">
      <CornerFrame />

      <header class="article__header">
        <div class="article__icon">{{ story.icon }}</div>
        <h1 class="article__title">{{ story.title }}</h1>
        <p class="article__subtitle">{{ story.subtitle }}</p>
        <LevelBadge v-if="story.level" :level="story.level" class="article__level" />
      </header>

      <div class="article__separator" />

      <section class="article__content">
        <p v-for="paragraph in storyParagraphs" :key="paragraph">{{ paragraph }}</p>
      </section>

      <StoryRolesSection v-if="story.roles" :roles="story.roles" />
    </article>

    <section v-else class="article article--missing">
      <h1 class="article__title">История не найдена</h1>
      <p class="article__lead">Возможно, ссылка устарела или была введена с ошибкой.</p>
    </section>
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

.article
  position relative
  padding clamp(1.5rem, 4vw, 2.6rem)
  background linear-gradient(180deg, unquote("color-mix(in srgb, var(--color-card) 92%, black 8%)"), var(--color-card))
  border 1px solid unquote("color-mix(in srgb, var(--color-primary) 36%, transparent)")
  border-radius 8px
  box-shadow 0 22px 40px rgba(0, 0, 0, 0.46), unquote("0 0 30px color-mix(in srgb, var(--color-primary) 14%, transparent)")

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

.article__subtitle
  color unquote("color-mix(in srgb, var(--color-text) 55%, var(--color-primary) 45%)")
  letter-spacing 0.17em
  text-transform uppercase
  font-size 0.72rem

.article__level
  margin-top 0.75rem

.article__separator
  width min(14rem, 38vw)
  height 1px
  margin 0 auto 1.35rem
  background linear-gradient(to right, transparent, var(--color-primary), transparent)

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
