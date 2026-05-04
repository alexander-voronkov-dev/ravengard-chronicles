<script setup lang="ts">
import { Tippy } from 'vue-tippy'
</script>

<template>
  <Tippy theme="sun" placement="top" animation="sun" :duration="[160, 120]" :arrow="true">
    <slot />

    <template #content>
      <slot name="content" />
    </template>
  </Tippy>
</template>

<style>
/* ─── Box ──────────────────────────────────────────────────── */
.tippy-box[data-theme~='sun'] {
  width: auto;
  padding: 0.75rem 0.9rem;
  background: color-mix(in srgb, var(--color-card) 96%, black 4%);
  border: 1px solid color-mix(in srgb, var(--color-primary) 28%, transparent);
  border-radius: 0.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
}

.tippy-box[data-theme~='sun'] .tippy-content {
  padding: 0;
}

/* ─── Arrow ─────────────────────────────────────────────────── */
.tippy-box[data-theme~='sun'] .tippy-arrow {
  width: 16px;
  height: 16px;
  color: color-mix(in srgb, var(--color-primary) 28%, transparent);
}

.tippy-box[data-theme~='sun'] .tippy-arrow::before {
  content: '';
  position: absolute;
  border-color: transparent;
  border-style: solid;
}

.tippy-box[data-theme~='sun'][data-placement^='top'] > .tippy-arrow {
  bottom: 0;
}
.tippy-box[data-theme~='sun'][data-placement^='top'] > .tippy-arrow::before {
  bottom: -7px;
  left: 0;
  border-width: 8px 8px 0;
  border-top-color: currentColor;
  transform-origin: center top;
}

.tippy-box[data-theme~='sun'][data-placement^='bottom'] > .tippy-arrow {
  top: 0;
}
.tippy-box[data-theme~='sun'][data-placement^='bottom'] > .tippy-arrow::before {
  top: -7px;
  left: 0;
  border-width: 0 8px 8px;
  border-bottom-color: currentColor;
  transform-origin: center bottom;
}

/* ─── Animation ─────────────────────────────────────────────── */
.tippy-box[data-theme~='sun'][data-animation='sun'] {
  transition:
    opacity 0.18s ease,
    transform 0.18s ease;
}

.tippy-box[data-theme~='sun'][data-animation='sun'][data-state='hidden'] {
  opacity: 0;
}

.tippy-box[data-theme~='sun'][data-animation='sun'][data-placement^='top'][data-state='hidden'] {
  transform: translateY(5px);
}

.tippy-box[data-theme~='sun'][data-animation='sun'][data-placement^='bottom'][data-state='hidden'] {
  transform: translateY(-5px);
}
</style>
