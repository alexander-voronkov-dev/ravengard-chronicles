<script setup lang="ts">
import MapFloorPlan  from '../components/MapFloorPlan.vue'
import MapRoom       from '../components/MapRoom.vue'
import MapWall       from '../components/MapWall.vue'
import MapDoor       from '../components/MapDoor.vue'
import MapStairs     from '../components/MapStairs.vue'
import MapCompass    from '../components/MapCompass.vue'
import MapLabel      from '../components/MapLabel.vue'
const props = defineProps<{ selected?: string | null }>()
const emit  = defineEmits<{ select: [id: string | null] }>()

function handleSelect(id: string) {
  emit('select', props.selected === id ? null : id)
}
</script>

<template>
  <MapFloorPlan name="ПОДВАЛ" roman="Pars Subterranea" tagline="котельная, погреб, склад">
    <!-- ─── Hatch fill for exterior earth ─────────────────── -->
    <defs>
      <pattern id="hatch" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="6" stroke="#8a6b48" stroke-width="0.6" opacity="0.4" />
      </pattern>
    </defs>
    <rect x="60"  y="150" width="560" height="570" fill="url(#hatch)" opacity="0.5" />
    <rect x="100" y="180" width="480" height="340" fill="#ead9b3" />

    <!-- ─── Rooms ─────────────────────────────────────────── -->
    <MapRoom id="boiler"   points="100,180 260,180 260,360 100,360" :selected="selected === 'boiler'"   @select="handleSelect" />
    <MapRoom id="wine"     points="260,180 580,180 580,360 260,360" :selected="selected === 'wine'"     @select="handleSelect" />
    <MapRoom id="corridor" points="100,360 580,360 580,420 100,420" :selected="selected === 'corridor'" @select="handleSelect" />
    <MapRoom id="storage"  points="100,420 340,420 340,520 100,520" :selected="selected === 'storage'"  @select="handleSelect" />
    <MapRoom id="laundry"  points="340,420 580,420 580,520 340,520" inert />

    <!-- ─── Walls ─────────────────────────────────────────── -->
    <MapWall thick d="M 100 180 L 580 180 L 580 520 L 100 520 Z" />
    <MapWall d="M 260 180 L 260 360" />
    <MapWall d="M 100 360 L 580 360" />
    <MapWall d="M 100 420 L 580 420" />
    <MapWall d="M 340 420 L 340 520" />

    <!-- ─── Doors ─────────────────────────────────────────── -->
    <MapDoor :x="180" :y="360" dir="h" swing="up"   />
    <MapDoor :x="420" :y="360" dir="h" swing="up"   />
    <MapDoor :x="220" :y="420" dir="h" swing="down" />
    <MapDoor :x="460" :y="420" dir="h" swing="down" />

    <!-- ─── Stairs ─────────────────────────────────────────── -->
    <MapStairs :x="290" :y="185" :w="36" :h="70" :steps="7">
      <text x="308" y="225" class="map-stair-arrow" text-anchor="middle">▲</text>
      <text x="308" y="272" class="map-stair-text">на I (кухня)</text>
    </MapStairs>

    <!-- ─── Labels ────────────────────────────────────────── -->
    <MapLabel :x="180" :y="200">КОТЕЛЬНАЯ</MapLabel>
    <MapLabel :x="420" :y="200" sub="под кухней">ВИННЫЙ ПОГРЕБ</MapLabel>
    <MapLabel :x="340" :y="395" size="small">ТЕХНИЧЕСКИЙ КОРИДОР</MapLabel>
    <MapLabel :x="220" :y="445" size="small" sub="инструменты, инвентарь">СКЛАД СЛУГ</MapLabel>
    <MapLabel :x="460" :y="445" size="small">ПРАЧЕЧНАЯ</MapLabel>

    <!-- ─── Compass + caption ─────────────────────────────── -->
    <MapCompass :x="620" :y="100" />
    <text x="340" y="610" class="map-stair-text" text-anchor="middle" font-style="italic">фундамент (без подвальных помещений)</text>

  </MapFloorPlan>
</template>
