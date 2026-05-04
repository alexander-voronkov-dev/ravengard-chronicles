<script setup lang="ts">
withDefaults(
  defineProps<{
    viewBox?: string
    name?: string
    roman?: string
    tagline?: string
  }>(),
  { viewBox: '0 0 680 800' },
)
</script>

<template>
  <div class="map-sheet">
    <header v-if="name" class="map-sheet__header">
      <span class="map-sheet__name">{{ name }}</span>
      <span v-if="roman" class="map-sheet__roman">{{ roman }}</span>
    </header>
    <p v-if="tagline" class="map-sheet__tagline">{{ tagline }}</p>

    <div class="map-sheet__svg-wrap">
      <svg :viewBox="viewBox" class="map-sheet__svg">
        <slot />
      </svg>
    </div>

    <div class="map-sheet__footer">~ ✦ ~</div>
  </div>
</template>

<style scoped lang="stylus">
.map-sheet
  position relative
  width 100%
  max-width 794px
  padding 48px 48px 56px
  border-radius 2px
  isolation isolate
  background \
    radial-gradient(ellipse at 25% 18%, rgba(255,238,200,0.45) 0%, transparent 40%),
    radial-gradient(ellipse at 80% 70%, rgba(180,140,90,0.25) 0%, transparent 50%),
    radial-gradient(ellipse at 60% 95%, rgba(120,80,40,0.3) 0%, transparent 60%),
    linear-gradient(180deg, #f1e3c1 0%, #ead9b3 50%, #d6bf90 100%)
  box-shadow \
    0 0 0 1px rgba(80,50,20,0.25),
    0 30px 60px -20px rgba(0,0,0,0.7),
    inset 0 0 60px rgba(120,80,40,0.25),
    inset 0 0 180px rgba(120,80,40,0.15)

  &::before
    content ''
    position absolute
    inset 0
    background \
      radial-gradient(circle at 12% 88%, rgba(70,40,15,0.18) 0%, transparent 8%),
      radial-gradient(circle at 88% 14%, rgba(70,40,15,0.14) 0%, transparent 10%),
      radial-gradient(circle at 92% 82%, rgba(70,40,15,0.16) 0%, transparent 9%),
      radial-gradient(circle at 8%  22%, rgba(70,40,15,0.12) 0%, transparent 7%)
    pointer-events none
    mix-blend-mode multiply
    z-index 0

  &::after
    content ''
    position absolute
    inset 0
    background \
      radial-gradient(ellipse 40px 30px at 18% 76%, rgba(110,70,30,0.18) 0%, transparent 75%),
      radial-gradient(ellipse 60px 50px at 82% 28%, rgba(110,70,30,0.14) 0%, transparent 70%),
      radial-gradient(ellipse 30px 25px at 70% 88%, rgba(110,70,30,0.12) 0%, transparent 70%)
    pointer-events none
    mix-blend-mode multiply
    z-index 0

.map-sheet__header
  position relative
  z-index 2
  display flex
  align-items baseline
  justify-content space-between
  margin-bottom 8px
  padding-bottom 12px
  border-bottom 1px solid rgba(80,50,20,0.3)

.map-sheet__name
  font-family 'IM Fell English SC', serif
  font-size 26px
  letter-spacing 0.1em
  color #3a2410

.map-sheet__roman
  font-family 'IM Fell English', serif
  font-style italic
  font-size 18px
  color #6b4a2b
  letter-spacing 0.08em

.map-sheet__tagline
  position relative
  z-index 2
  font-style italic
  color #8a6b48
  font-size 13px
  margin-bottom 12px

.map-sheet__svg-wrap
  position relative
  z-index 1
  width 100%

.map-sheet__svg
  width 100%
  height auto
  display block

.map-sheet__footer
  position absolute
  bottom 16px
  left 0
  right 0
  text-align center
  font-family 'IM Fell English', serif
  font-style italic
  color #8a6b48
  font-size 11px
  letter-spacing 0.08em
  z-index 2
</style>
