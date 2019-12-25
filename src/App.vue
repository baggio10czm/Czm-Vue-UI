<template>
  <div id="app">
    <c-button>按钮</c-button>
  </div>
</template>

<script>
import CButton from './components/cButton/cButton'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    CButton
  }
}
</script>

<style lang="stylus">
#app
  color $color-text
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
</style>
