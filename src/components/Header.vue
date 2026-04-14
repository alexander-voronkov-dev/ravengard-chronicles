<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="header__ornament">
      <span class="header__line"></span>
      <span class="header__icon">❖</span>
      <span class="header__line"></span>
    </div>

    <h1 class="header__title">Хроники Рейвенгарда</h1>
    <h2 class="header__subtitle">Выбери свой путь</h2>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.5rem 0 0.5rem;
  text-align: center;
}

.header__ornament {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  color: var(--color-primary);
  opacity: 0.85;
}

.header__line {
  width: clamp(3.5rem, 8vw, 5rem);
  height: 1px;
  background: linear-gradient(to right, transparent, var(--color-primary), transparent);
}

.header__icon {
  font-size: 1.6rem;
  letter-spacing: 0.03em;
}

.header__title {
  color: var(--color-text);
  font-size: clamp(2.1rem, 5vw, 3.5rem);
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 1.05;
}

.header__subtitle {
  color: color-mix(in srgb, var(--color-text) 65%, var(--color-primary) 35%);
  text-transform: uppercase;
  letter-spacing: 0.28em;
  font-size: clamp(0.72rem, 1.8vw, 0.95rem);
  font-weight: 500;
}
</style>
