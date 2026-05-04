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
  <MapFloorPlan name="ПЕРВЫЙ ЭТАЖ" roman="Pars Prima" tagline="парадные залы, кухня, малый кабинет">
    <!-- ─── Rooms ─────────────────────────────────────────── -->
    <MapRoom id="entry"   points="240,610 440,610 440,720 240,720" :selected="selected === 'entry'"   @select="handleSelect" />
    <MapRoom id="hall"    points="200,310 480,310 480,610 200,610" :selected="selected === 'hall'"    @select="handleSelect" />
    <MapRoom id="parlor"  points="60,470  200,470 200,720 60,720"  :selected="selected === 'parlor'"  @select="handleSelect" />
    <MapRoom id="study1"  points="60,310  200,310 200,470 60,470"  :selected="selected === 'study1'"  @select="handleSelect" />
    <MapRoom id="dining"  points="480,470 620,470 620,720 480,720" :selected="selected === 'dining'"  @select="handleSelect" />
    <MapRoom id="kitchen" points="200,150 480,150 480,310 200,310" :selected="selected === 'kitchen'" @select="handleSelect" />
    <MapRoom id="wc1"     points="480,310 540,310 540,400 480,400" :selected="selected === 'wc1'"     @select="handleSelect" />
    <MapRoom id="pantry1" points="540,310 620,310 620,400 540,400" :selected="selected === 'pantry1'" @select="handleSelect" />
    <MapRoom id="svc-nw"  points="60,150 200,150 200,310 60,310"   inert />
    <MapRoom id="svc-ne"  points="480,400 620,400 620,470 480,470" inert />

    <!-- ─── Walls ─────────────────────────────────────────── -->
    <MapWall thick d="M 60 720 L 60 150 L 620 150 L 620 720 Z" />
    <MapWall d="M 60 310  L 620 310" />
    <MapWall d="M 200 150 L 200 310" />
    <MapWall d="M 480 150 L 480 310" />
    <MapWall d="M 480 400 L 620 400" />
    <MapWall d="M 540 310 L 540 400" />
    <MapWall d="M 200 310 L 200 720" />
    <MapWall d="M 480 310 L 480 720" />
    <MapWall d="M 200 610 L 240 610" />
    <MapWall d="M 440 610 L 480 610" />
    <MapWall d="M 240 610 L 240 720" />
    <MapWall d="M 440 610 L 440 720" />
    <MapWall d="M 60 470  L 200 470" />
    <MapWall d="M 480 470 L 620 470" />

    <!-- ─── Windows ───────────────────────────────────────── -->
    <MapWindow :x1="80"  :y1="720" :x2="130" :y2="720" />
    <MapWindow :x1="550" :y1="720" :x2="600" :y2="720" />
    <MapWindow :x1="250" :y1="150" :x2="290" :y2="150" />
    <MapWindow :x1="390" :y1="150" :x2="430" :y2="150" />
    <MapWindow :x1="620" :y1="500" :x2="620" :y2="550" />
    <MapWindow :x1="620" :y1="620" :x2="620" :y2="670" />
    <MapWindow :x1="60"  :y1="500" :x2="60"  :y2="550" />
    <MapWindow :x1="60"  :y1="620" :x2="60"  :y2="670" />

    <!-- ─── Doors ─────────────────────────────────────────── -->
    <MapDoubleDoor :x="340" :y="720" :w="36" />
    <MapDoubleDoor :x="340" :y="610" :w="40" />
    <MapDoor :x="200" :y="665" dir="v" swing="right" />
    <MapDoor :x="480" :y="665" dir="v" swing="left"  />
    <MapDoor :x="130" :y="470" dir="h" swing="up"    />
    <MapDoor :x="340" :y="310" dir="h" swing="up"    />
    <MapDoor :x="200" :y="400" dir="v" swing="left"  />
    <MapDoor :x="480" :y="350" dir="v" swing="right" />
    <MapDoor :x="540" :y="355" dir="v" swing="right" />
    <MapDoor :x="480" :y="500" dir="v" swing="right" />
    <MapDoor :x="540" :y="310" dir="h" swing="up"    />

    <!-- ─── Stairs ─────────────────────────────────────────── -->
    <MapStairs :x="420" :y="330" :w="56" :h="130" :steps="11">
      <text x="448" y="395" class="map-stair-arrow" text-anchor="middle">▲</text>
      <text x="448" y="490" class="map-stair-text">на II</text>
    </MapStairs>
    <MapStairs :x="210" :y="170" :w="36" :h="90" :steps="9">
      <text x="228" y="220" class="map-stair-arrow" text-anchor="middle">▼</text>
      <text x="228" y="278" class="map-stair-text">в подв.</text>
    </MapStairs>

    <!-- ─── Fixtures ──────────────────────────────────────── -->
    <MapFireplace :x="75" :y="470" :w="50" :h="14" side="top" />

    <!-- ─── Labels ────────────────────────────────────────── -->
    <MapLabel :x="340" :y="668" sub="парадный вход">ВЕСТИБЮЛЬ</MapLabel>
    <MapLabel :x="340" :y="540" sub="для торжеств">БОЛЬШОЙ ГОСТЕВОЙ ЗАЛ</MapLabel>
    <MapLabel :x="130" :y="600" sub="с камином">ГОСТИНАЯ</MapLabel>
    <MapLabel :x="130" :y="385" size="small">КАБИНЕТ</MapLabel>
    <MapLabel :x="550" :y="600">СТОЛОВАЯ</MapLabel>
    <MapLabel :x="340" :y="265">КУХНЯ</MapLabel>
    <MapLabel :x="510" :y="358" size="tiny">УБОРН.</MapLabel>
    <MapLabel :x="580" :y="358" size="tiny">КЛАДОВ.</MapLabel>
    <MapLabel :x="130" :y="225" size="small" muted>служебный</MapLabel>
    <MapLabel :x="130" :y="240" size="tiny"  muted>коридор</MapLabel>

    <!-- ─── Compass + caption ─────────────────────────────── -->
    <MapCompass :x="620" :y="100" />
    <text x="340" y="755" class="map-stair-text" text-anchor="middle" font-style="italic">— парадный фасад —</text>
  </MapFloorPlan>
</template>
