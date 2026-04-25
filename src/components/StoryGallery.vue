<script setup lang="ts">
import type { GalleryImage } from '@/composables/useStories'
import { ref } from 'vue'
import SunSectionHeader from '@/ui-kit/SunSectionHeader.vue'

defineProps<{ images: GalleryImage[] }>()

const active = ref<GalleryImage | null>(null)

function openLightbox(image: GalleryImage) {
  active.value = image
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  active.value = null
  document.body.style.overflow = ''
}
</script>

<template>
  <section v-if="images.length" class="mt-11">
    <SunSectionHeader>Персонажи</SunSectionHeader>

    <div class="gallery">
      <button
        v-for="(image, i) in images"
        :key="i"
        class="gallery__item"
        @click="openLightbox(image)"
      >
        <img :src="image.src" :alt="image.alt ?? image.title ?? ''" class="gallery__img" loading="lazy" />
        <div v-if="image.title || image.description" class="gallery__overlay">
          <p v-if="image.title" class="gallery__overlay-title">{{ image.title }}</p>
          <p v-if="image.description" class="gallery__overlay-desc">{{ image.description }}</p>
        </div>
      </button>
    </div>

    <Teleport to="body">
      <div v-if="active" class="lightbox" @click.self="closeLightbox">
        <button class="lightbox__close" @click="closeLightbox">✕</button>
        <div class="lightbox__content">
          <img :src="active.src" :alt="active.alt ?? active.title ?? ''" class="lightbox__img" />
          <div v-if="active.title || active.description" class="lightbox__caption">
            <p v-if="active.title" class="lightbox__caption-title">{{ active.title }}</p>
            <p v-if="active.description" class="lightbox__caption-desc">{{ active.description }}</p>
          </div>
        </div>
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
  position relative
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

    .gallery__overlay
      opacity 1

.gallery__img
  display block
  width 100%
  height auto
  object-fit cover

.gallery__overlay
  position absolute
  inset 0
  display flex
  flex-direction column
  justify-content flex-end
  padding 0.85rem 1rem
  background linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.28) 55%, transparent 100%)
  opacity 0
  transition opacity 0.22s ease

.gallery__overlay-title
  font-family 'Cormorant Garamond', serif
  font-size 0.95rem
  font-weight 700
  color #fff
  line-height 1.2
  margin-bottom 0.2rem

.gallery__overlay-desc
  font-size 0.75rem
  line-height 1.45
  color rgba(255, 255, 255, 0.75)

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

.lightbox__content
  display flex
  flex-direction column
  align-items center
  gap 1rem
  max-width 90vw
  cursor default

.lightbox__img
  max-width 100%
  max-height 80vh
  border-radius 0.5rem
  object-fit contain
  box-shadow 0 30px 80px rgba(0, 0, 0, 0.7)

.lightbox__caption
  text-align center
  max-width 560px

.lightbox__caption-title
  font-family 'Cormorant Garamond', serif
  font-size 1.15rem
  font-weight 700
  color #fff
  margin-bottom 0.3rem

.lightbox__caption-desc
  font-size 0.85rem
  line-height 1.55
  color rgba(255, 255, 255, 0.65)
</style>
