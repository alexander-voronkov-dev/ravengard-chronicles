<template>
  <div class="sun-divider">
    <span class="sun-divider__line" />
  </div>
</template>

<style scoped lang="stylus">
.sun-divider
  display flex
  justify-content center
  margin-bottom 1.5rem

.sun-divider__line
  width 3.5rem
  height 1px
  background linear-gradient(to right, transparent, var(--color-primary), transparent)
</style>
