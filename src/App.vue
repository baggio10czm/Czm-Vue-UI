<template>
  <div id="app">
    <div class="button">
      <c-button>按钮</c-button>
      <c-button icon="upload" icon-position="left">按钮</c-button>
      <c-button icon="settings" icon-position="right">按钮</c-button>
      <c-button icon="download">按钮</c-button>
      <c-button icon="upload" icon-position="right" loading>按钮</c-button>
      <c-button icon="download" loading>按钮</c-button>
      <button-group>
        <c-button icon="left" @click="previous">上一页</c-button>
        <c-button>1</c-button>
        <c-button>2</c-button>
        <c-button>3</c-button>
        <c-button icon="right" icon-position="right">下一页</c-button>
      </button-group>
    </div>
    <div class="input">
      <c-input :value="inputValue"></c-input>
      <c-input :value="inputValue" @change="inputChange"></c-input>
      <c-input value="disable" disable></c-input>
      <c-input value="readonly" readonly></c-input>
      <c-input value="error" error="用户名错误"></c-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      inputValue: 'Czm-UI'
    }
  },
  methods: {
    previous () {
      console.log('上一页')
    },
    inputChange (value) {
      console.log(value)
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

    .button,.input
      display: flex
      margin-bottom: 20px
      padding: 20px
      background-color: #fafafa
      border: 1px solid #eee

      > button
        margin-right: 20px
    .input > div
        margin-right 20px
</style>
