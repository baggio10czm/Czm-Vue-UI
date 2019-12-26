<template>
  <div id="app">
    <div class="button">
      <c-button>按钮</c-button>
      <c-button icon="settings" icon-position="right">按钮</c-button>
      <c-button icon="upload" icon-position="left">按钮</c-button>
      <c-button icon="download">按钮</c-button>
      <c-button icon="upload" icon-position="right" loading>按钮</c-button>
      <c-button icon="download" loading>按钮</c-button>
    </div>
    <div class="button button-group">
      <button-group>
        <c-button icon="left">上一页</c-button>
        <c-button>1</c-button>
        <c-button>2</c-button>
        <c-button icon="right" icon-position="right">下一页</c-button>
      </button-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus">
#app
  padding 20px
  color $color-text
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  .button
    padding: 20px
    background-color: #fafafa
    border: 1px solid #eee
</style>
