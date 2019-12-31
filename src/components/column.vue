<template>
    <div class="column"
         :class="columnClass"
         :style="columnStyle"
    >
      <slot></slot>
    </div>
</template>

<script>
let validator = (value) => {
  let keys = Object.keys(value)
  let valid = true
  keys.forEach(key => {
    if (!['span', 'offset'].includes(key)) valid = false
  })
  return valid
}
export default {
  name: 'column',
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    xs: {
      type: Object,
      validator
    },
    sm: {
      type: Object,
      validator
    },
    md: {
      type: Object,
      validator
    },
    lg: {
      type: Object,
      validator
    },
    xl: {
      type: Object,
      validator
    }
  },
  data () {
    return {
      gutter: 0
    }
  },
  computed: {
    columnClass () {
      let { span, offset, xs, sm, md, lg, xl } = this
      let createClass = (obj, str = '') => {
        if (!obj) return []
        let array = []
        if (obj.span) array.push(`col-${str}${obj.span}`)
        if (obj.offset) array.push(`col-${str}offset-${obj.offset}`)
        return array
      }
      return [
        ...createClass({ span, offset }),
        ...createClass(xs, 'xs-'),
        ...createClass(sm, 'sm-'),
        ...createClass(md, 'md-'),
        ...createClass(lg, 'lg-'),
        ...createClass(xl, 'xl-')
      ]
    },
    columnStyle () {
      return { paddingLeft: this.gutter / 2 + 'px', paddingRight: this.gutter / 2 + 'px' }
    }
  }
}
</script>

<style lang="stylus">
$cols = 24
$query = {
    normal: '',
    xs: 'max-width: 768px',
    sm: 'min-width: 768px',
    md: 'min-width: 992px',
    lg: 'min-width: 1200px',
    xl: 'min-width: 1920px',
  }
media($class = '')
  $class += '-' unless $class == ''

  .col-{$class}0
    display none

  for $num in 1..$cols
    $percent = ($num / $cols * 100)%

    .col-{$class}{$num}
      width $percent
    .col-{$class}offset-{$num}
      margin-left $percent

for $k, $v in $query
  if $k == 'normal'
    media()
  else
    @media only screen and ({$v})
      media($k)
</style>
