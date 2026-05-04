<script setup lang="ts">
import './styles/map.css'
import MansionFloor1 from './floors/MansionFloor1.vue'
</script>

<template>
  <main class="map-view">
    <header class="map-view__header">
      <h1 class="map-view__title">ОСОБНЯК ГОСПОДИНА УРБАНТА</h1>
    </header>

    <div class="map-view__plans">
      <MansionFloor1 />
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

.map-view__title
  font-family 'IM Fell English SC', serif
  font-size clamp(1.6rem, 4vw, 2.4rem)
  font-weight 400
  letter-spacing 0.06em
  color #d9c69a
  text-shadow 0 0 22px rgba(0,0,0,0.6)
  margin 0

.map-view__plans
  width 100%
  max-width 860px
  display flex
  flex-direction column
  align-items center
  padding 0 clamp(0.5rem, 3vw, 2rem)
</style>
