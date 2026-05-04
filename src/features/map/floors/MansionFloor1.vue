<script setup lang="ts">
import MapFloorPlan  from '../components/MapFloorPlan.vue'
import MapRoom       from '../components/MapRoom.vue'
import MapWall       from '../components/MapWall.vue'
import MapDoor       from '../components/MapDoor.vue'
import MapDoubleDoor from '../components/MapDoubleDoor.vue'
import MapWindow     from '../components/MapWindow.vue'
import MapStairs     from '../components/MapStairs.vue'
import MapFireplace  from '../components/MapFireplace.vue'
import MapLabel      from '../components/MapLabel.vue'
</script>

<template>
  <MapFloorPlan name="ПЕРВЫЙ ЭТАЖ" roman="Особняк Урбанта" view-box="40 130 600 615">
    <!-- ─── Rooms ─────────────────────────────────────────── -->
    <MapRoom id="entry"   points="240,610 440,610 440,720 240,720" />
    <MapRoom id="hall"    points="200,310 480,310 480,610 200,610" />
    <MapRoom id="parlor"  points="60,470  200,470 200,720 60,720"  />
    <MapRoom id="study1"  points="60,310  200,310 200,470 60,470"  />
    <MapRoom id="dining"  points="480,430 620,430 620,720 480,720" />
    <MapRoom id="kitchen" points="480,150 620,150 620,430 480,430" />
    <MapRoom id="pantry"  points="200,150 340,150 340,310 200,310" />
    <MapRoom id="wc"      points="340,150 480,150 480,310 340,310" />
    <MapRoom id="svc-nw"  points="60,150 200,150 200,310 60,310"   inert />

    <!-- ─── Walls ─────────────────────────────────────────── -->
    <MapWall thick d="M 60 720 L 60 150 L 620 150 L 620 720 Z" />
    <MapWall d="M 60 310  L 480 310" />
    <MapWall d="M 200 150 L 200 310" />
    <MapWall d="M 340 150 L 340 310" />
    <MapWall d="M 480 150 L 480 310" />
    <MapWall d="M 480 430 L 620 430" />
    <MapWall d="M 200 310 L 200 720" />
    <MapWall d="M 480 310 L 480 720" />
    <MapWall d="M 200 610 L 240 610" />
    <MapWall d="M 440 610 L 480 610" />
    <MapWall d="M 240 610 L 240 720" />
    <MapWall d="M 440 610 L 440 720" />
    <MapWall d="M 60 470  L 200 470" />

    <!-- ─── Windows ───────────────────────────────────────── -->
    <MapWindow :x1="80"  :y1="720" :x2="130" :y2="720" />
    <MapWindow :x1="550" :y1="720" :x2="600" :y2="720" />
    <MapWindow :x1="220" :y1="150" :x2="270" :y2="150" />
    <MapWindow :x1="380" :y1="150" :x2="430" :y2="150" />
    <MapWindow :x1="510" :y1="150" :x2="560" :y2="150" />
    <MapWindow :x1="620" :y1="200" :x2="620" :y2="250" />
    <MapWindow :x1="620" :y1="330" :x2="620" :y2="385" />
    <MapWindow :x1="620" :y1="490" :x2="620" :y2="545" />
    <MapWindow :x1="620" :y1="620" :x2="620" :y2="675" />
    <MapWindow :x1="60"  :y1="500" :x2="60"  :y2="550" />
    <MapWindow :x1="60"  :y1="620" :x2="60"  :y2="670" />

    <!-- ─── Doors ─────────────────────────────────────────── -->
    <MapDoubleDoor :x="340" :y="720" :w="36" />
    <MapDoubleDoor :x="340" :y="610" :w="40" />
    <MapDoor :x="200" :y="665" dir="v" swing="right" />
    <MapDoor :x="130" :y="470" dir="h" swing="up"    />
    <MapDoor :x="200" :y="400" dir="v" swing="left"  />
    <MapDoor :x="270" :y="310" dir="h" swing="up"    />
    <MapDoor :x="410" :y="310" dir="h" swing="up"    />
    <MapDoor :x="480" :y="370" dir="v" swing="left"  />
    <MapDoor :x="550" :y="430" dir="h" swing="down"  />
    <MapDoor :x="480" :y="520" dir="v" swing="right" />

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
    <MapLabel :x="550" :y="575">СТОЛОВАЯ</MapLabel>
    <MapLabel :x="550" :y="285">КУХНЯ</MapLabel>
    <MapLabel :x="270" :y="230" size="small">КЛАДОВАЯ</MapLabel>
    <MapLabel :x="410" :y="230" size="small">УБОРНАЯ</MapLabel>
    <MapLabel :x="130" :y="225" size="small" muted>служебный</MapLabel>
    <MapLabel :x="130" :y="240" size="tiny"  muted>коридор</MapLabel>

    <!-- ─── Compass ───────────────────────────────────────── -->
    <!-- <MapCompass :x="620" :y="0" /> -->
  </MapFloorPlan>
</template>
