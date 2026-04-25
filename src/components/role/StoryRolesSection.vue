<script setup lang="ts">
import type { Role } from '@/composables/useStories'
import SunSectionHeader from '@/ui-kit/SunSectionHeader.vue'
import SunBadge from '@/ui-kit/SunBadge.vue'
import SunCard from '@/ui-kit/SunCard.vue'
import StoryItems from '@/components/role/StoryItems.vue'

const { roles } = defineProps<{ roles: Role[] }>()
</script>

<template>
  <section v-if="roles.length" class="mt-11">
    <SunSectionHeader>Роли</SunSectionHeader>

    <div class="grid gap-4 grid-cols-2 max-[760px]:grid-cols-1">
      <SunCard v-for="role in roles" :key="role.name" tag="article" hoverable class="role-card">
        <SunBadge variant="filled" class="role-badge">{{ role.name }}</SunBadge>

        <img v-if="role.image" :src="role.image" :alt="role.name" class="image" />

        <p class="text-sm leading-relaxed description">{{ role.description }}</p>

        <p v-if="role.recommendedClasses.length" class="text-xs opacity-70">
          <strong class="opacity-100">Рекомендуемые классы:</strong>
          {{ role.recommendedClasses.join(', ') }}
        </p>

        <ul v-if="role.advantages" class="advantages">
          <li v-for="advantage in role.advantages" :key="advantage">{{ advantage }}</li>
        </ul>

        <StoryItems v-if="role.items?.length" :items="role.items" class="mt-4" />

        <blockquote v-if="role.quote" class="quote">«{{ role.quote }}»</blockquote>
      </SunCard>
    </div>
  </section>
</template>

<style scoped lang="stylus">
.role-card
  display flex
  flex-direction column
  align-items center
  text-align center
  gap 0.75rem

.role-badge
  width 50%

.image
  width 100%
  height auto
  max-height 150px
  object-fit contain
  display block
  flex 1

.description
  margin-bottom auto

.advantages
  list-style none
  display grid
  gap 0.25rem
  font-size 0.75rem
  opacity 0.8
  width 100%
  text-align left

.quote
  padding-left 0.75rem
  font-size 0.8rem
  color var(--color-primary)
  opacity 0.85
  font-style italic
  line-height 1.5
  text-align center
</style>
