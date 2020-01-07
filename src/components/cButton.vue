<template>
    <button class="c-button" :class="icon && iconPosition && 'icon-'+ iconPosition" @click="$emit('click')">
      <icon v-if="icon && !loading" :name="icon" class="icon"></icon>
      <icon v-if="loading" class="icon loading" name="loading"></icon>
      <span class="button-text">
        <slot></slot>
      </span>
    </button>
</template>

<script>
export default {
  name: 'CButton',
  props: {
    icon: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      validator (value) {
        return value === 'right' || value === 'left'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/stylus/variable"

  @keyframes spin
    0%
      transform rotate(0deg)
    100%
      transform rotate(360deg)

  .c-button
    color #333
    font-size: $font-size-medium
    height $button-height
    padding 0 1em
    border-radius border-radius
    border 1px solid $border-color
    background-color #fff
    display inline-flex
    justify-content center
    align-items center
    vertical-align middle
    cursor pointer
    .button-text
      order 2
    .icon
      order 1
      margin-right 5px
    &:hover
      border-color $el-active-color
    &:active
      border-color $el-active-color
    &:focus
      outline none
    &.icon-right
      .button-text
        order 1
      .icon
        order 2
        margin-left 5px
        margin-right 0
    .loading
      animation spin 1.5s infinite linear
</style>
