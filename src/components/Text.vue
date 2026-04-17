<script setup lang="ts">
import { computed } from 'vue'
import { useAttrs } from 'vue'

type TextVariant =
  | 'title-large'
  | 'title-medium'
  | 'title-small'
  | 'body-large'
  | 'body'
  | 'body-small'
  | 'caption'

type TextWeight = 'regular' | 'medium' | 'bold'
type TextTone = 'regular' | 'accent' | 'muted' | 'secondary'

const props = defineProps<{
  as?: keyof HTMLElementTagNameMap | string
  variant?: TextVariant
  weight?: TextWeight
  tone?: TextTone
  uppercase?: boolean
}>()

const attrs = useAttrs()

const tag = computed(() => props.as ?? 'span')
const variantClass = computed(() => `text--${props.variant ?? 'body'}`)
const weightClass = computed(() => `text--${props.weight ?? 'regular'}`)
const toneClass = computed(() => `text--${props.tone ?? 'regular'}`)
const uppercaseClass = computed(() => (props.uppercase ? 'text--uppercase' : ''))

const textClasses = computed(() =>
  [
    'text',
    variantClass.value,
    weightClass.value,
    toneClass.value,
    uppercaseClass.value,
    attrs.class,
  ].filter(Boolean),
)
</script>

<template>
  <component :is="tag" :class="textClasses">
    <slot />
  </component>
</template>

<style scoped>
.text {
  margin: 0;
  color: var(--color-text);
  font-family: 'Literata', serif;
  line-height: 1.6;
}

.text--title-large {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
}

.text--title-medium {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.9rem, 4vw, 2.4rem);
  line-height: 1.08;
  letter-spacing: -0.01em;
}

.text--title-small {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.35rem, 3vw, 1.75rem);
  line-height: 1.15;
}

.text--body-large {
  font-size: 1.08rem;
  line-height: 1.75;
}

.text--body {
  font-size: 1rem;
  line-height: 1.7;
}

.text--body-small {
  font-size: 0.92rem;
  line-height: 1.65;
}

.text--caption {
  font-size: 0.82rem;
  line-height: 1.5;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.text--regular {
  font-weight: 400;
}

.text--medium {
  font-weight: 500;
}

.text--bold {
  font-weight: 700;
}

.text--accent {
  color: var(--color-primary);
}

.text--muted {
  color: color-mix(in srgb, var(--color-text) 72%, #000 28%);
}

.text--secondary {
  color: color-mix(in srgb, var(--color-text) 88%, #000 12%);
}

.text--uppercase {
  text-transform: uppercase;
  letter-spacing: 0.12em;
}
</style>
