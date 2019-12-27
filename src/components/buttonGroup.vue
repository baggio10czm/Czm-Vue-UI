<template>
    <div class="button-group">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'buttonGroup',
  mounted () {
    // 如果子元素不是button组件 发出警告
    for (let child of this.$el.children) {
      const childName = child.nodeName.toLowerCase()
      if (childName !== 'button') {
        console.warn(`buttonGroup 子元素必须是 'button'组件，你用的是${childName}`)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/stylus/variable"
  .button-group
    button
      border-radius 0
      &:not(first-child)
        margin-left -1px
      &:first-child
        border-top-left-radius border-radius
        border-bottom-left-radius border-radius
      &:last-child
        border-top-right-radius border-radius
        border-bottom-right-radius border-radius
      &:hover
        position: relative
        z-index 1
</style>
