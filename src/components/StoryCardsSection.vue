<script setup lang="ts">
import StoryCard from './StoryCard.vue'
import { useStories } from '@/composables/useStories'

const { getStories } = useStories()
const stories = getStories()
</script>

<template>
  <section class="stories">
    <div class="stories__grid">
      <StoryCard
        v-for="(story, index) in stories"
        :key="story.title"
        :index="index + 1"
        :icon="story.icon"
        :title="story.title"
        :subtitle="story.subtitle"
        :short-description="story.shortDescription"
        :story-id="story.id"
      />
    </div>
  </section>
</template>

<style scoped>
.stories {
  width: 100%;
  padding: clamp(1.4rem, 4vw, 2.2rem) 0 1rem;
}

.stories__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1rem, 2vw, 1.4rem);
}

@media (max-width: 1080px) {
  .stories__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .stories__grid {
    grid-template-columns: 1fr;
  }
}
</style>
