<template>
    <div class="column"
         :class="columnClass"
         :style="columnStyle"
    >
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'column',
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    }
  },
  data () {
    return {
      gutter: 0
    }
  },
  computed: {
    columnClass () {
      let { span, offset } = this
      return [ span && 'col-' + span, offset && 'offset-' + offset ]
    },
    columnStyle () {
      return { paddingLeft: this.gutter / 2 + 'px', paddingRight: this.gutter / 2 + 'px' }
    }
  }
}
</script>

<style lang="stylus">
  .column
    width: 100%
    for $num in 1..24
      $percent =($num / 24 * 100)%
      &.col-{$num}
        width $percent
      &.offset-{$num}
        margin-left $percent
</style>
