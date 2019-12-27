<template>
    <div class="wrapper" :class="{ error }">
      <input type="text"
             :value="value"
             :disabled="disable"
             :readonly="readonly"
             @input="$emit('input',$event.target.value)"
             @change="$emit('change',$event.target.value)"
             @focus="$emit('focus',$event.target.value)"
             @blur="$emit('blur',$event.target.value)">
      <template v-if="error">
        <icon name="errorText" color="#ff3931"/>
        <span class="errorText">{{ error }}</span>
      </template>
    </div>
</template>

<script>
export default {
  name: 'cInput',
  props: {
    value: {
      type: String
    },
    disable: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/stylus/variable"
  .wrapper
    display inline-flex
    align-items center
    font-size: $font-size-medium;
    > input
      height 32px
      border: 1px solid $border-color
      border-radius $border-radius
      padding: 0 8px;
      font-size: $font-size-medium;
      &:hover
        border-color $el-active-color
      &:focus
        box-shadow inset 0 1px 3px $box-shadow-color
        outline none
      &[disabled],&[readonly]
        color #bbb
        border-color #bbb
        cursor not-allowed
    &.error
      > input
        color: #ff3931
        border-color #ff3931
        &:focus
          box-shadow inset 0 1px 3px rgba(255, 0, 0, 0.56)
      > svg
        margin 0 5px 0 10px
      .errorText
        color: #ff3931

</style>
