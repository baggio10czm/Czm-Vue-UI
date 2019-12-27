<template>
    <svg v-if="name" class="icon" :style="color && 'fill:'+color">
      <use :xlink:href="`#i-${name}`" />
    </svg>
</template>

<script>
export default {
  name: 'icon',
  props: {
    name: String,
    color: String
  }
}
</script>

<style lang="stylus" scoped>
  .icon
    width 1em
    height 1em
</style>
