<template>
  <div class="container">
    <div class="box"></div>
    <van-sticky :offset-top="300">
      <van-button type="primary">基础用法</van-button>
    </van-sticky>
  </div>
</template>

<script>
  export default {
    name: "Sticky"
  }
</script>

<style lang="stylus" scoped>
.container
  height 1000px
.box
  width: 100%
  height: 300px
  background-color #eee
</style>
