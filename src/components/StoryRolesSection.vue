<script setup lang="ts">
import type { Role } from '@/composables/useStories'

const { roles } = defineProps<{ roles: Role[] }>()

function onMouseMove(e: MouseEvent) {
  const card = e.currentTarget as HTMLElement
  const { left, top, width, height } = card.getBoundingClientRect()
  const x = e.clientX - left
  const y = e.clientY - top
  const rotateX = (y / height - 0.5) * -10
  const rotateY = (x / width - 0.5) * 10

  card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`
  card.style.setProperty('--glare-x', `${(x / width) * 100}%`)
  card.style.setProperty('--glare-y', `${(y / height) * 100}%`)
  card.style.setProperty('--glare-opacity', '1')
}

function onMouseLeave(e: MouseEvent) {
  const card = e.currentTarget as HTMLElement
  card.style.transform = ''
  card.style.setProperty('--glare-opacity', '0')
}
</script>

<template>
  <section v-if="roles.length" class="mt-11">
    <div class="flex flex-wrap items-end gap-4 mb-4 border-b border-white/8 pb-2">
      <h2 class="text-2xl font-bold font-['Cormorant_Garamond',serif]">Роли</h2>
    </div>

    <div class="grid gap-4 grid-cols-2 max-[760px]:grid-cols-1">
      <article
        v-for="role in roles"
        :key="role.name"
        class="role-card"
        @mousemove="onMouseMove"
        @mouseleave="onMouseLeave"
      >
        <div class="card-body">
          <span class="badge">{{ role.name }}</span>

          <img :src="role.image" :alt="role.name" class="image" />

          <p class="text-sm leading-relaxed mb-3 description">{{ role.description }}</p>

          <p class="text-xs opacity-70 mb-3">
            <strong class="opacity-100">Рекомендуемые классы:</strong>
            {{ role.recommendedClasses.join(', ') }}
          </p>

          <ul
            v-if="role.advantages"
            class="pl-4 list-disc grid gap-1 mb-3 text-xs opacity-80 advantages"
          >
            <li v-for="advantage in role.advantages" :key="advantage">{{ advantage }}</li>
          </ul>

          <blockquote class="quote">«{{ role.quote }}»</blockquote>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped lang="stylus">
.role-card
  position relative
  overflow hidden
  border-radius 1rem
  border 1px solid rgba(201, 165, 90, 0.2)
  transition transform 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)
  will-change transform
  cursor default
  --glare-x 50%
  --glare-y 50%
  --glare-opacity 0

  &::after
    content ''
    position absolute
    inset 0
    border-radius inherit
    background radial-gradient(circle at var(--glare-x) var(--glare-y), rgba(255, 255, 255, 0.13) 0%, transparent 55%)
    opacity var(--glare-opacity)
    transition opacity 0.35s ease
    pointer-events none
    z-index 10

  &:hover
    transition transform 0.08s linear
    border-color rgba(201, 165, 90, 0.5)

.card-body
  position relative
  z-index 1
  height 100%
  display flex
  flex-direction column
  justify-content center
  padding 1.25rem 1.5rem
  text-align center
  gap 12px

  & ul
    list-style none

.image
  width 100%
  height auto
  max-height 150px
  object-fit contain
  margin-bottom 1rem
  display block
  flex 1

.badge
  padding 0.4rem 0.7rem
  border-radius 999px
  background var(--color-primary)
  color #fff
  font-size 0.7rem
  letter-spacing 0.1em
  text-transform uppercase
  font-weight 700
  margin-bottom 0.75rem
  align-self center
  width 50%
  text-align center

.description
  margin-bottom auto

.quote
  padding-left 0.75rem
  font-size 0.8rem
  color var(--color-primary)
  opacity 0.85
  font-style italic
  line-height 1.5
</style>
