<template>
  <div class="section-header">
    <h2 class="section-header__title"><slot /></h2>
  </div>
</template>

<style scoped lang="stylus">
.section-header
  display flex
  flex-wrap wrap
  align-items flex-end
  gap 1rem
  margin-bottom 1rem
  padding-bottom 0.5rem
  border-bottom 1px solid rgba(255, 255, 255, 0.08)

.section-header__title
  font-size 1.875rem
  font-weight 700
  line-height 1.2
</style>
