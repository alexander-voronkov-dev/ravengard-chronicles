<script setup lang="ts">
import { ref } from 'vue'
import './styles/map.css'
import MansionFloor1  from './floors/MansionFloor1.vue'
import MansionFloor2  from './floors/MansionFloor2.vue'
import MansionBasement from './floors/MansionBasement.vue'

const selectedRoom = ref<string | null>(null)
</script>

<template>
  <main class="map-view">
    <header class="map-view__header">
      <h1 class="map-view__title">ОСОБНЯКЪ ВЪ НОВОГОДНЮЮ НОЧЬ</h1>
      <p class="map-view__sub">— план-схема в трёх ярусах —</p>
    </header>

    <div class="map-view__controls">
      <button class="map-ctrl-btn" @click="selectedRoom = null">
        Снять выделение
      </button>
    </div>

    <div class="map-view__plans">
      <MansionFloor1   :selected="selectedRoom" @select="selectedRoom = $event" />
      <MansionFloor2   :selected="selectedRoom" @select="selectedRoom = $event" />
      <MansionBasement :selected="selectedRoom" @select="selectedRoom = $event" />
    </div>
  </main>
</template>

<style scoped lang="stylus">
.map-view
  width 100%
  padding clamp(1.5rem, 4vw, 3rem) 0 4rem
  display flex
  flex-direction column
  align-items center
  gap 2rem

.map-view__header
  text-align center
  color #c9b58a

.map-view__title
  font-family 'IM Fell English SC', serif
  font-size clamp(1.6rem, 4vw, 2.4rem)
  font-weight 400
  letter-spacing 0.06em
  color #d9c69a
  text-shadow 0 0 22px rgba(0,0,0,0.6)
  margin 0

.map-view__sub
  font-style italic
  color #a89060
  font-family 'IM Fell English', serif
  font-size 1rem
  letter-spacing 0.04em
  margin 0.4rem 0 0

.map-view__controls
  display flex
  gap 0.6rem
  align-items center
  flex-wrap wrap
  justify-content center
  background rgba(20,12,8,0.55)
  border 1px solid rgba(163,114,35,0.35)
  padding 0.6rem 1rem
  border-radius 2px

.map-ctrl-btn
  background transparent
  color #c9b58a
  border 1px solid rgba(201,181,138,0.35)
  font-family 'IM Fell English SC', serif
  letter-spacing 0.08em
  font-size 0.8rem
  padding 0.35rem 0.85rem
  cursor pointer
  transition background 0.2s, border-color 0.2s, color 0.2s
  border-radius 2px
  white-space nowrap

  &:hover
    background rgba(201,181,138,0.1)

  &.active
    background rgba(201,181,138,0.15)
    border-color #c9b58a
    color #f1e3c1


.map-view__plans
  width 100%
  max-width 860px
  display flex
  flex-direction column
  align-items center
  gap 2rem
  padding 0 clamp(0.5rem, 3vw, 2rem)
</style>
