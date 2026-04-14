<script setup lang="ts">
import { useRouter } from 'vue-router'

interface StoryCardProps {
  index: number
  icon: string
  title: string
  subtitle: string
  shortDescription: string
  storyId: string
}

defineProps<StoryCardProps>()
</script>

<template>
  <RouterLink :to="`/story/${storyId}`" class="story-card">
    <div class="story-card__frame story-card__frame--top-left"></div>
    <div class="story-card__frame story-card__frame--top-right"></div>
    <div class="story-card__frame story-card__frame--bottom-left"></div>
    <div class="story-card__frame story-card__frame--bottom-right"></div>

    <div class="story-card__head">
      <span class="story-card__icon" aria-hidden="true">{{ icon }}</span>
      <span class="story-card__index">{{ index }}</span>
    </div>

    <h3 class="story-card__title">{{ title }}</h3>
    <p class="story-card__subtitle">{{ subtitle }}</p>

    <div class="story-card__divider">
      <span></span>
    </div>

    <p class="story-card__short-description">{{ shortDescription }}</p>
  </RouterLink>
</template>

<style scoped>
.story-card {
  position: relative;
  min-height: 30rem;
  padding: 1.5rem 1.6rem 1.8rem;
  background: var(--color-card);
  border: 1px solid color-mix(in srgb, var(--color-primary) 40%, transparent);
  border-radius: 6px;
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.story-card:hover {
  transform: translateY(-4px);
  border-color: color-mix(in srgb, var(--color-primary) 68%, transparent);
  box-shadow:
    0 18px 34px rgba(0, 0, 0, 0.5),
    0 0 0 1px color-mix(in srgb, var(--color-primary) 30%, transparent),
    0 0 24px color-mix(in srgb, var(--color-primary) 45%, transparent);
}

.story-card__head {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.75rem;
}

.story-card__icon {
  color: var(--color-primary);
  font-size: 3.5rem;
}

.story-card__index {
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--color-primary) 25%, transparent);
  color: color-mix(in srgb, var(--color-text) 55%, var(--color-primary) 45%);
  font-size: 0.8rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2rem;
  right: 2rem;
}

.story-card__title {
  color: var(--color-text);
  font-size: clamp(2rem, 3vw, 2.45rem);
  line-height: 1.08;
  text-align: center;
  margin-bottom: 0.55rem;
  text-wrap: balance;
}

.story-card__subtitle {
  color: color-mix(in srgb, var(--color-text) 55%, var(--color-primary) 45%);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.17em;
  font-size: 0.65rem;
  margin-bottom: 1.2rem;
}

.story-card__divider {
  display: flex;
  justify-content: center;
  margin-bottom: 1.4rem;
}

.story-card__divider span {
  width: 3.5rem;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--color-primary), transparent);
}

.story-card__description {
  color: color-mix(in srgb, var(--color-text) 82%, #000 18%);
  font-size: 0.95rem;
  line-height: 1.6;
  text-align: center;
  white-space: pre-line;
}

.story-card__short-description {
  color: color-mix(in srgb, var(--color-text) 88%, #000 12%);
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 1.1rem;
}

.story-card__frame {
  position: absolute;
  width: 1rem;
  height: 1rem;
  color: #c9a55a;
}

.story-card__frame--top-left {
  top: 0.55rem;
  left: 0.55rem;
  border-top: 1px solid;
  border-left: 1px solid;
}

.story-card__frame--top-right {
  top: 0.55rem;
  right: 0.55rem;
  border-top: 1px solid;
  border-right: 1px solid;
}

.story-card__frame--bottom-left {
  bottom: 0.55rem;
  left: 0.55rem;
  border-bottom: 1px solid;
  border-left: 1px solid;
}

.story-card__frame--bottom-right {
  bottom: 0.55rem;
  right: 0.55rem;
  border-bottom: 1px solid;
  border-right: 1px solid;
}
</style>
