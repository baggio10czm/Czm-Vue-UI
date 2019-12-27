<template>
  <div id="app">
    <!--  button  button-group 组件  -->
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
  <!--   input 组件  -->
    <div class="input">
      <c-input v-model="inputValue"></c-input>
      <c-input v-model="inputValue" @change="inputChange"></c-input>
      <c-input value="disable" disable></c-input>
      <c-input value="readonly" readonly></c-input>
      <c-input value="error" error="用户名错误"></c-input>
    </div>
    <!--  布局row col 组件  -->
    <div class="layout">
      <row gutter="20">
        <column span="12"><div class="content">Czm</div></column>
        <column span="12"><div class="content">Czm</div></column>
      </row>

      <row gutter="20">
        <column span="4"><div class="content">YYY</div></column>
        <column span="8"><div class="content">YYY</div></column>
        <column span="5"><div class="content">CMX</div></column>
        <column span="4"><div class="content">CJQ</div></column>
      </row>

      <row gutter="20">
        <column span="3"><div class="content">LOVE</div></column>
        <column span="3" offset="7"><div class="content">HOPE</div></column>
        <column span="3" offset="8"><div class="content">FAITH</div></column>
      </row>
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
      value && console.log(value)
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

    .layout
      .content
        height: 100px
        border: 1px solid yellowgreen
</style>
