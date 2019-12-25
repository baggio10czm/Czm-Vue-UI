<template>
    <button class="c-button"><slot></slot></button>
</template>

<script>
export default {
  name: 'CButton'
}
</script>

<style lang="stylus" scoped>
  @import "~@/stylus/variable"
  .c-button
    font-size: $font-size-medium
    height $button-height
    padding 0 1em
    border-radius $button-border-radius
    border 1px solid $button-border-color
    background-color #fff
    display flex
    justify-content center
    align-items center
    vertical-align middle
    &:hover
      border-color $button-border-active-color
    &:active
      border-color $button-active-color
</style>
