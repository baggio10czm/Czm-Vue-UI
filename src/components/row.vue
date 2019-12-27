<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'row',
  props: {
    gutter: [Number, String]
  },
  computed: {
    rowStyle () {
      let { gutter } = this
      return { marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' }
    }
  },
  mounted () {
    // 将gutter值传到col组件
    for (let vm of this.$children) {
      vm.gutter = this.gutter
    }
  }
}
</script>

<style lang="stylus" scoped>
  .row
    display: flex
</style>
