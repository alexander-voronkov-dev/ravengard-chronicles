<script setup lang="ts">
import StoryBranchSection from './StoryBranchSection.vue'
import { useStories } from '@/composables/useStories'

const { getBranches } = useStories()
const branches = getBranches()
</script>

<template>
  <section class="stories">
    <StoryBranchSection
      v-for="branch in branches"
      :key="branch.id"
      :branch="branch"
    />
  </section>
</template>

<style scoped lang="stylus">
.stories
  width 100%
  padding clamp(1.4rem, 4vw, 2.2rem) 0 1rem
  display flex
  flex-direction column
  gap clamp(2.5rem, 5vw, 3.5rem)
</style>
