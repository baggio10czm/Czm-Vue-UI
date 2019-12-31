<template>
  <div id="app">
    <h2>button</h2>
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
    <h2>input</h2>
    <div class="input">
      <c-input v-model="inputValue"></c-input>
      <c-input v-model="inputValue" @change="inputChange"></c-input>
      <c-input value="disable" disable></c-input>
      <c-input value="readonly" readonly></c-input>
      <c-input value="error" error="用户名错误"></c-input>
    </div>
    <!--  布局row col 组件  -->
    <h2>Grid</h2>
    <div class="Grid">
      <row gutter="20">
        <column span="12">
          <div class="content">Czm</div>
        </column>
        <column span="12">
          <div class="content">Cmx</div>
        </column>
        <column span="12">
          <div class="content">Yyy</div>
        </column>
        <column span="3">
          <div class="content">Cjq</div>
        </column>
        <column span="2" offset="7">
          <div class="content">=7=</div>
        </column>
      </row>

      <row gutter="20">
        <column span="4">
          <div class="content">YYY</div>
        </column>
        <column span="8">
          <div class="content">YYY</div>
        </column>
        <column span="5">
          <div class="content">CMX</div>
        </column>
        <column span="4">
          <div class="content">CJQ</div>
        </column>
      </row>

      <row gutter="20">
        <column span="3">
          <div class="content">LOVE</div>
        </column>
        <column span="3" offset="1">
          <div class="content">HOPE</div>
        </column>
        <column span="3" offset="8">
          <div class="content">FAITH</div>
        </column>
      </row>

      <row gutter="20" align="center">
        <column span="3" :xs="{ span: 12 }" :sm="{ span: 8 }" :md="{ span: 3, offset: 1 }">
          <div class="content">LOVE</div>
        </column>
        <column span="3" :xs="{ span: 12 }" :sm="{ span: 8 }" :md="{ span: 3, offset: 1 }">
          <div class="content">HOPE</div>
        </column>
        <column span="3" :xs="{ span: 12 }" :sm="{ span: 8 }" :md="{ span: 3, offset: 1 }">
          <div class="content">FAITH</div>
        </column>
      </row>
    </div>

    <h2>Layout</h2>
    <c-layout style="height: 400px">
      <c-header class="demo">
        <div>Header</div>
      </c-header>
      <c-content class="demo">
        <div>Content</div>
      </c-content>
      <c-footer class="demo">
        <div>Footer</div>
      </c-footer>
    </c-layout>

    <c-layout style="height: 500px; margin-top: 100px;">
      <c-header class="demo">
        <div>Header</div>
      </c-header>
      <c-layout>
        <c-content class="demo">
          <div>Content</div>
        </c-content>
        <c-sider class="demo">Sider</c-sider>
      </c-layout>
      <c-footer class="demo">
        <div>Footer</div>
      </c-footer>
    </c-layout>

    <c-layout style="height: 500px; margin-top: 100px;">
      <c-sider class="demo">Sider</c-sider>
      <c-layout>
        <c-header class="demo">
          <div>Header</div>
        </c-header>
        <c-content class="demo">
          <div>Content</div>
        </c-content>
        <c-footer class="demo">
          <div>Footer</div>
        </c-footer>
      </c-layout>
    </c-layout>
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
  @import "~@/stylus/reset"
  @import "~@/stylus/variable"
  body
    margin: 0

  #app
    padding 20px
    color $color-text
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale

    h2
      font-size: $font-size-large-x
      font-weight: bold
      border-bottom: 1px dashed #ccc
      margin-bottom: 20px

    .button, .input
      display: flex
      margin-bottom: 20px
      padding: 20px
      background-color: #fafafa
      border: 1px solid #eee

      > button
        margin-right: 20px

    .input > div
      margin-right 20px

    .Grid
      .content
        height: 100px
        border: 1px solid yellowgreen

    .demo
      min-height: 100px
      border: 1px solid #ccc
    .sider
      width: 200px
</style>
