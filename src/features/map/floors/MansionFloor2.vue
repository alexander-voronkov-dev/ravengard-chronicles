<script setup lang="ts">
import MapFloorPlan  from '../components/MapFloorPlan.vue'
import MapRoom       from '../components/MapRoom.vue'
import MapWall       from '../components/MapWall.vue'
import MapDoor       from '../components/MapDoor.vue'
import MapDoubleDoor from '../components/MapDoubleDoor.vue'
import MapWindow     from '../components/MapWindow.vue'
import MapStairs     from '../components/MapStairs.vue'
import MapFireplace  from '../components/MapFireplace.vue'
import MapCompass    from '../components/MapCompass.vue'
import MapLabel      from '../components/MapLabel.vue'
const props = defineProps<{ selected?: string | null }>()
const emit  = defineEmits<{ select: [id: string | null] }>()

function handleSelect(id: string) {
  emit('select', props.selected === id ? null : id)
}
</script>

<template>
  <MapFloorPlan name="ВТОРОЙ ЭТАЖ" roman="Pars Secunda" tagline="спальни, библиотека, кладовые">
    <!-- ─── Rooms ─────────────────────────────────────────── -->
    <MapRoom id="gallery" points="200,310 480,310 480,610 200,610" :selected="selected === 'gallery'" @select="handleSelect" />
    <MapRoom id="master"  points="60,470  200,470 200,720 60,720"  :selected="selected === 'master'"  @select="handleSelect" />
    <MapRoom id="library" points="60,310  200,310 200,470 60,470"  :selected="selected === 'library'" @select="handleSelect" />
    <MapRoom id="study2"  points="60,150  200,150 200,310 60,310"  :selected="selected === 'study2'"  @select="handleSelect" />
    <MapRoom id="guest1"  points="480,470 620,470 620,580 480,580" :selected="selected === 'guest1'"  @select="handleSelect" />
    <MapRoom id="guest2"  points="480,580 620,580 620,720 480,720" :selected="selected === 'guest2'"  @select="handleSelect" />
    <MapRoom id="guest3"  points="480,310 620,310 620,470 480,470" :selected="selected === 'guest3'"  @select="handleSelect" />
    <MapRoom id="linen"   points="480,150 560,150 560,310 480,310" :selected="selected === 'linen'"   @select="handleSelect" />
    <MapRoom id="pantry2" points="560,150 620,150 620,310 560,310" :selected="selected === 'pantry2'" @select="handleSelect" />
    <MapRoom id="wc2"     points="200,150 480,150 480,310 200,310" :selected="selected === 'wc2'"     @select="handleSelect" />

    <!-- non-clickable: upper hall + balcony side niches -->
    <MapRoom id="hall-top"  points="240,610 440,610 440,720 240,720" inert />
    <MapRoom id="niche-l"   points="200,610 240,610 240,720 200,720" inert />
    <MapRoom id="niche-r"   points="440,610 480,610 480,720 440,720" inert />

    <!-- ─── Walls ─────────────────────────────────────────── -->
    <MapWall thick d="M 60 720 L 60 150 L 620 150 L 620 720 Z" />
    <MapWall d="M 200 150 L 200 720" />
    <MapWall d="M 480 150 L 480 720" />
    <MapWall d="M 60  310 L 200 310" />
    <MapWall d="M 60  470 L 200 470" />
    <MapWall d="M 200 310 L 480 310" />
    <MapWall d="M 200 610 L 480 610" />
    <MapWall d="M 480 470 L 620 470" />
    <MapWall d="M 480 580 L 620 580" />
    <MapWall d="M 480 310 L 620 310" />
    <MapWall d="M 560 150 L 560 310" />
    <MapWall d="M 240 610 L 240 720" />
    <MapWall d="M 440 610 L 440 720" />

    <!-- ─── Light well notation ───────────────────────────── -->
    <rect x="260" y="370" width="160" height="180"
      fill="none" stroke="#8a6b48" stroke-width="1" stroke-dasharray="3 3" />
    <text x="340" y="465" class="map-room-label tiny" fill="#8a6b48">световой колодец</text>
    <text x="340" y="478" class="map-room-label tiny" fill="#8a6b48">над залом</text>

    <!-- ─── Windows ───────────────────────────────────────── -->
    <MapWindow :x1="80"  :y1="720" :x2="130" :y2="720" />
    <MapWindow :x1="250" :y1="720" :x2="290" :y2="720" />
    <MapWindow :x1="390" :y1="720" :x2="430" :y2="720" />
    <MapWindow :x1="550" :y1="720" :x2="600" :y2="720" />
    <MapWindow :x1="620" :y1="350" :x2="620" :y2="400" />
    <MapWindow :x1="620" :y1="500" :x2="620" :y2="550" />
    <MapWindow :x1="620" :y1="620" :x2="620" :y2="670" />
    <MapWindow :x1="60"  :y1="350" :x2="60"  :y2="400" />
    <MapWindow :x1="60"  :y1="520" :x2="60"  :y2="570" />
    <MapWindow :x1="60"  :y1="620" :x2="60"  :y2="670" />
    <MapWindow :x1="60"  :y1="200" :x2="60"  :y2="250" />
    <MapWindow :x1="250" :y1="150" :x2="290" :y2="150" />
    <MapWindow :x1="390" :y1="150" :x2="430" :y2="150" />

    <!-- ─── Doors ─────────────────────────────────────────── -->
    <MapDoor :x="200" :y="550" dir="v" swing="right" />
    <MapDoor :x="200" :y="400" dir="v" swing="right" />
    <MapDoor :x="130" :y="310" dir="h" swing="up"    />
    <MapDoor :x="340" :y="310" dir="h" swing="up"    />
    <MapDoor :x="480" :y="220" dir="v" swing="left"  />
    <MapDoor :x="560" :y="220" dir="v" swing="left"  />
    <MapDoor :x="480" :y="400" dir="v" swing="left"  />
    <MapDoor :x="480" :y="520" dir="v" swing="left"  />
    <MapDoor :x="480" :y="650" dir="v" swing="left"  />
    <MapDoubleDoor :x="340" :y="610" :w="28" />

    <!-- ─── Stairs ─────────────────────────────────────────── -->
    <MapStairs :x="420" :y="330" :w="56" :h="130" :steps="11">
      <text x="448" y="395" class="map-stair-arrow" text-anchor="middle">▼</text>
      <text x="448" y="490" class="map-stair-text">на I</text>
    </MapStairs>

    <!-- ─── Fixtures ──────────────────────────────────────── -->
    <MapFireplace :x="555" :y="310" :w="30" :h="12" side="top" />

    <!-- ─── Labels ────────────────────────────────────────── -->
    <MapLabel :x="130" :y="610">ХОЗЯЙСКАЯ СПАЛЬНЯ</MapLabel>
    <MapLabel :x="130" :y="395">БИБЛИОТЕКА</MapLabel>
    <MapLabel :x="130" :y="200">КАБИНЕТ ХОЗЯИНА</MapLabel>
    <MapLabel :x="550" :y="400">ГОСТЕВАЯ III</MapLabel>
    <MapLabel :x="550" :y="535">ГОСТЕВАЯ I</MapLabel>
    <MapLabel :x="550" :y="660">ГОСТЕВАЯ II</MapLabel>
    <MapLabel :x="520" :y="270" size="small">БЕЛЬЕВАЯ</MapLabel>
    <MapLabel :x="590" :y="270" size="tiny">КЛАДОВ.</MapLabel>
    <MapLabel :x="340" :y="260">УБОРНАЯ</MapLabel>
    <MapLabel :x="340" :y="350">ГАЛЕРЕЯ</MapLabel>
    <MapLabel :x="340" :y="600">ГАЛЕРЕЯ</MapLabel>
    <MapLabel :x="340" :y="685" size="small" muted>верхний холл</MapLabel>

    <!-- ─── Compass + caption ─────────────────────────────── -->
    <MapCompass :x="620" :y="100" />
    <text x="340" y="755" class="map-stair-text" text-anchor="middle" font-style="italic">— парадный фасад —</text>

  </MapFloorPlan>
</template>
