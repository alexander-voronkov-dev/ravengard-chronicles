<script setup lang="ts">
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
    <div class="corner corner--tl" />
    <div class="corner corner--tr" />
    <div class="corner corner--bl" />
    <div class="corner corner--br" />

    <span class="index-badge">{{ index }}</span>

    <div class="flex items-center justify-center mb-7">
      <span class="text-[3.5rem] leading-none text-[var(--color-primary)]" aria-hidden="true">
        {{ icon }}
      </span>
    </div>

    <h3 class="card-title">{{ title }}</h3>
    <p class="subtitle">{{ subtitle }}</p>

    <div class="flex justify-center mb-6">
      <span
        class="w-14 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent"
      />
    </div>

    <p class="text-center text-base leading-relaxed opacity-90">{{ shortDescription }}</p>
  </RouterLink>
</template>

<style scoped lang="stylus">
.story-card
  position relative
  min-height 30rem
  padding 1.5rem 1.6rem 1.8rem
  background var(--color-card)
  border 1px solid unquote("color-mix(in srgb, var(--color-primary) 40%, transparent)")
  border-radius 6px
  box-shadow 0 14px 34px rgba(0, 0, 0, 0.45)
  display flex
  flex-direction column
  cursor pointer
  transition transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease

  &:hover
    transform translateY(-4px)
    border-color unquote("color-mix(in srgb, var(--color-primary) 68%, transparent)")
    box-shadow 0 18px 34px rgba(0, 0, 0, 0.5), unquote("0 0 0 1px color-mix(in srgb, var(--color-primary) 30%, transparent)"), unquote("0 0 24px color-mix(in srgb, var(--color-primary) 45%, transparent)")

.corner
  position absolute
  width 1rem
  height 1rem
  border-color unquote("color-mix(in srgb, var(--color-primary) 40%, transparent)")

.corner--tl
  top 0.55rem
  left 0.55rem
  border-top 1px solid
  border-left 1px solid

.corner--tr
  top 0.55rem
  right 0.55rem
  border-top 1px solid
  border-right 1px solid

.corner--bl
  bottom 0.55rem
  left 0.55rem
  border-bottom 1px solid
  border-left 1px solid

.corner--br
  bottom 0.55rem
  right 0.55rem
  border-bottom 1px solid
  border-right 1px solid

.index-badge
  position absolute
  top 1.5rem
  right 1.6rem
  width 1.7rem
  height 1.7rem
  border-radius 999px
  border 1px solid unquote("color-mix(in srgb, var(--color-primary) 25%, transparent)")
  color unquote("color-mix(in srgb, var(--color-text) 55%, var(--color-primary) 45%)")
  font-size 0.8rem
  display inline-flex
  align-items center
  justify-content center

.card-title
  font-size clamp(2rem, 3vw, 2.45rem)
  line-height 1.08
  text-align center
  margin-bottom 0.55rem
  text-wrap balance

.subtitle
  color unquote("color-mix(in srgb, var(--color-text) 55%, var(--color-primary) 45%)")
  text-align center
  text-transform uppercase
  letter-spacing 0.17em
  font-size 0.65rem
  margin-bottom 1.2rem
</style>
