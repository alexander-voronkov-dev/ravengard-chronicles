<script setup lang="ts">
import type { Role } from '@/composables/useStories'

const { roles } = defineProps<{ roles: Role[] }>()
</script>

<template>
  <section v-if="roles.length" class="mt-11">
    <div class="flex flex-wrap items-end gap-4 mb-4 border-b border-white/8 pb-2">
      <h2 class="text-3xl font-bold">Роли</h2>
    </div>

    <div class="grid gap-4 grid-cols-2 max-[760px]:grid-cols-1">
      <article v-for="role in roles" :key="role.name" class="role-card">
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
  border 1px solid unquote("color-mix(in srgb, var(--color-primary) 22%, transparent)")
  background unquote("color-mix(in srgb, var(--color-card) 80%, black 20%)")
  transition border-color 0.2s ease, box-shadow 0.2s ease

  &:hover
    border-color unquote("color-mix(in srgb, var(--color-primary) 50%, transparent)")
    box-shadow unquote("0 8px 24px color-mix(in srgb, var(--color-primary) 10%, transparent)")

.card-body
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
