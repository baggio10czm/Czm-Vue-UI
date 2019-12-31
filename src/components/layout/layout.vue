<template>
<div class="layout" :class="layoutClass">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      layoutClass: {
        hasSider: false
      }
    }
  },
  mounted () {
    this.$children.forEach(vm => {
      // 如果有 sider 组件就加一个class 标记
      if (vm.$options.name === 'cSider') {
        this.layoutClass.hasSider = true
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
.layout
  flex-grow 1
  display: flex;
  flex-direction column
  &.hasSider
    flex-direction row
</style>
