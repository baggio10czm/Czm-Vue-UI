<template>
<div class="content">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'cContent'
}
</script>

<style lang="stylus" scoped>
.content
  flex-grow 1
</style>
