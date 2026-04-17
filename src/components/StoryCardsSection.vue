<script setup lang="ts">
import StoryCard from './StoryCard.vue'
import { useStories } from '@/composables/useStories'

const { getStories } = useStories()
const stories = getStories()
</script>

<template>
  <section class="stories">
    <div class="grid grid-cols-3 gap-5 max-[1080px]:grid-cols-2 max-[760px]:grid-cols-1">
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

<style scoped lang="stylus">
.stories
  width 100%
  padding clamp(1.4rem, 4vw, 2.2rem) 0 1rem
</style>
