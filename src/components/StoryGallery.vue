<script setup lang="ts">
import type { GalleryImage } from '@/composables/useStories'
import { ref } from 'vue'

defineProps<{ images: GalleryImage[] }>()

const lightboxSrc = ref<string | null>(null)

function openLightbox(src: string) {
  lightboxSrc.value = src
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxSrc.value = null
  document.body.style.overflow = ''
}
</script>

<template>
  <section v-if="images.length" class="mt-11">
    <div class="flex flex-wrap items-end gap-4 mb-4 border-b border-white/8 pb-2">
      <h2 class="text-3xl font-bold">Галерея</h2>
    </div>

    <div class="gallery">
      <button
        v-for="(image, i) in images"
        :key="i"
        class="gallery__item"
        @click="openLightbox(image.src)"
      >
        <img :src="image.src" :alt="image.alt ?? ''" class="gallery__img" loading="lazy" />
      </button>
    </div>

    <Teleport to="body">
      <div v-if="lightboxSrc" class="lightbox" @click.self="closeLightbox">
        <button class="lightbox__close" @click="closeLightbox">✕</button>
        <img :src="lightboxSrc" class="lightbox__img" />
      </div>
    </Teleport>
  </section>
</template>

<style scoped lang="stylus">
.gallery
  columns 3
  column-gap 0.75rem

  @media (max-width 760px)
    columns 2

  @media (max-width 460px)
    columns 1

.gallery__item
  display block
  width 100%
  break-inside avoid
  margin-bottom 0.75rem
  padding 0
  background none
  border none
  border-radius 0.6rem
  overflow hidden
  cursor zoom-in
  border 1px solid unquote("color-mix(in srgb, var(--color-primary) 18%, transparent)")
  transition border-color 0.2s ease, transform 0.2s ease

  &:hover
    border-color unquote("color-mix(in srgb, var(--color-primary) 55%, transparent)")
    transform scale(1.01)

.gallery__img
  display block
  width 100%
  height auto
  object-fit cover

.lightbox
  position fixed
  inset 0
  z-index 1000
  background rgba(0, 0, 0, 0.88)
  display flex
  align-items center
  justify-content center
  padding 2rem
  cursor zoom-out
  backdrop-filter blur(4px)

.lightbox__close
  position absolute
  top 1.2rem
  right 1.4rem
  background none
  border none
  color rgba(255, 255, 255, 0.6)
  font-size 1.4rem
  cursor pointer
  line-height 1
  transition color 0.15s ease
  padding 0.25rem 0.5rem

  &:hover
    color #fff

.lightbox__img
  max-width 100%
  max-height 90vh
  border-radius 0.5rem
  object-fit contain
  box-shadow 0 30px 80px rgba(0, 0, 0, 0.7)
  cursor default
</style>
