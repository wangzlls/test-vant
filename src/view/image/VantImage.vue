<template>
  <div>
    <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
    <br>
    <van-image
      width="10rem"
      height="10rem"
      fit="contain"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <br>
    <van-image
      round
      width="10rem"
      height="10rem"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <br>
    <van-image
      width="100"
      height="100"
      lazy-load
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <br>
    <van-image src="https://img.yzcdn.cn/vant/cat.jpeg">
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
    </van-image>
    <br>
    <van-image src="https://img.yzcdn.cn/vant/cat.jpeg">
      <template v-slot:error>加载失败</template>
    </van-image>
  </div>
</template>

<script>
  export default {
    name: "VantImage"
  }
</script>

<style scoped>

</style>