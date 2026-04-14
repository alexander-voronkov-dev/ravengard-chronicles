<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStories } from '@/composables/useStories'
import type { Story } from '@/composables/useStories'

const { getStories } = useStories()
const stories = getStories()

const route = useRoute()
const storyId = computed(() => String(route.params.storyId ?? ''))
const story = computed(() => stories.find((story: Story) => story.id === storyId.value))
const storyParagraphs = computed(() => story.value?.description.split('\n\n') ?? [])
</script>

<template>
  <main class="story-page">
    <RouterLink to="/" class="story-page__back-link">← Вернуться к историям</RouterLink>

    <article v-if="story" class="story-article">
      <div class="story-article__frame story-article__frame--top-left"></div>
      <div class="story-article__frame story-article__frame--top-right"></div>
      <div class="story-article__frame story-article__frame--bottom-left"></div>
      <div class="story-article__frame story-article__frame--bottom-right"></div>

      <header class="story-article__header">
        <div class="story-article__icon">{{ story.icon }}</div>
        <h1 class="story-article__title">{{ story.title }}</h1>
        <p class="story-article__subtitle">{{ story.subtitle }}</p>
      </header>

      <div class="story-article__separator">
        <span></span>
      </div>

      <section class="story-article__content">
        <p v-for="paragraph in storyParagraphs" :key="paragraph">
          {{ paragraph }}
        </p>
      </section>
    </article>

    <section v-else class="story-article story-article--missing">
      <h1 class="story-article__title">История не найдена</h1>
      <p class="story-article__lead">Возможно, ссылка устарела или была введена с ошибкой.</p>
    </section>
  </main>
</template>

<style scoped>
.story-page {
  width: 100%;
  padding: clamp(1rem, 3vw, 1.8rem) 0 1rem;
}

.story-page__back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 1.2rem;
  color: color-mix(in srgb, var(--color-text) 82%, var(--color-primary) 18%);
  font-size: 0.9rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: color 0.2s ease;
}

.story-page__back-link:hover {
  color: var(--color-primary);
}

.story-article {
  position: relative;
  padding: clamp(1.5rem, 4vw, 2.6rem);
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--color-card) 92%, black 8%),
    var(--color-card)
  );
  border: 1px solid color-mix(in srgb, var(--color-primary) 36%, transparent);
  border-radius: 8px;
  box-shadow:
    0 22px 40px rgba(0, 0, 0, 0.46),
    0 0 30px color-mix(in srgb, var(--color-primary) 14%, transparent);
}

.story-article__header {
  text-align: center;
  margin-bottom: 1.2rem;
}

.story-article__icon {
  font-size: 2.6rem;
  margin-bottom: 0.4rem;
}

.story-article__title {
  color: var(--color-text);
  font-size: clamp(2rem, 5vw, 3.2rem);
  line-height: 1.05;
  margin-bottom: 0.5rem;
  text-wrap: balance;
  white-space: pre-line;
}

.story-article__subtitle {
  color: color-mix(in srgb, var(--color-text) 55%, var(--color-primary) 45%);
  letter-spacing: 0.17em;
  text-transform: uppercase;
  font-size: 0.72rem;
}

.story-article__separator {
  display: flex;
  justify-content: center;
  margin-bottom: 1.35rem;
}

.story-article__separator span {
  width: min(14rem, 38vw);
  height: 1px;
  background: linear-gradient(to right, transparent, var(--color-primary), transparent);
}

.story-article__lead {
  color: color-mix(in srgb, var(--color-text) 85%, #000 15%);
  font-size: 1.03rem;
  line-height: 1.65;
  text-align: center;
  margin-bottom: 1.3rem;
  font-style: italic;
}

.story-article__content {
  display: grid;
  gap: 1.15rem;
}

.story-article__content p {
  color: color-mix(in srgb, var(--color-text) 92%, #000 8%);
  font-size: 1.03rem;
  line-height: 1.75;
  white-space: pre-line;
}

.story-article__frame {
  position: absolute;
  width: 1rem;
  height: 1rem;
  color: #c9a55a;
}

.story-article__frame--top-left {
  top: 0.7rem;
  left: 0.7rem;
  border-top: 1px solid;
  border-left: 1px solid;
}

.story-article__frame--top-right {
  top: 0.7rem;
  right: 0.7rem;
  border-top: 1px solid;
  border-right: 1px solid;
}

.story-article__frame--bottom-left {
  bottom: 0.7rem;
  left: 0.7rem;
  border-bottom: 1px solid;
  border-left: 1px solid;
}

.story-article__frame--bottom-right {
  bottom: 0.7rem;
  right: 0.7rem;
  border-bottom: 1px solid;
  border-right: 1px solid;
}

.story-article--missing {
  text-align: center;
}

@media (max-width: 760px) {
  .story-article__content p {
    font-size: 0.98rem;
    line-height: 1.68;
  }
}
</style>
