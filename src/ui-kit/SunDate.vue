<script setup lang="ts">
import SunTooltip from '@/ui-kit/SunTooltip.vue'

defineProps<{ date: string }>()
</script>

<template>
  <SunTooltip>
    <span class="sun-date">❖ {{ date }}</span>

    <template #content>
      <strong class="tooltip-title">Календарь Харптоса</strong>
      <p class="tooltip-description">12 месяцев по 30 дней в каждом</p>
      <ol class="tooltip-list">
        <li>Хаммер</li>
        <li>Алтуриак</li>
        <li>Чес</li>
        <li>Тарсак</li>
        <li>Миртул</li>
        <li>Киторн</li>
        <li>Флеймрул</li>
        <li>Элейнт</li>
        <li>Элесиас</li>
        <li>Марпенот</li>
        <li>Уктар</li>
        <li>Найтол</li>
      </ol>
    </template>
  </SunTooltip>
</template>

<style scoped lang="stylus">
.sun-date
  font-size 0.72rem
  letter-spacing 0.12em
  color unquote("color-mix(in srgb, var(--color-text) 45%, var(--color-primary) 55%)")
  cursor default

.tooltip-title
  display block
  font-size 0.65rem
  letter-spacing 0.1em
  text-transform uppercase
  color var(--color-primary)
  margin-bottom 0.5rem

.tooltip-description
  font-size 0.72rem
  line-height 1.45
  color unquote("color-mix(in srgb, var(--color-text) 80%, transparent)")
  margin-bottom 0.75rem

.tooltip-list
  margin 0
  padding-left 1.1rem
  display grid
  gap 0.2rem
  padding 0

  li
    font-size 0.72rem
    line-height 1.45
    color unquote("color-mix(in srgb, var(--color-text) 80%, transparent)")
    font-style normal
</style>
