<template>
  <div>
    <van-button type="primary">主要按钮</van-button>
    <br>
    <van-button type="info">信息按钮</van-button>
    <br>
    <van-button type="default">默认按钮</van-button>
    <br>
    <van-button type="warning">警告按钮</van-button>
    <br>
    <van-button type="danger">危险按钮</van-button>
    <br>
    <van-button plain type="primary">朴素按钮</van-button>
    <br>
    <van-button plain type="info">朴素按钮</van-button>
    <br>
    <van-button plain hairline type="primary">细边框按钮</van-button>
    <br>
    <van-button plain hairline type="info">细边框按钮</van-button>
    <br>
    <van-button loading type="primary" />
    <br>
    <van-button loading type="primary" loading-type="spinner" />
    <br>
    <van-button loading type="info" loading-text="加载中..." />
    <br>
    <van-button square type="primary">方形按钮</van-button>
    <br>
    <van-button round type="info">圆形按钮</van-button>
    <br>
    <van-button icon="plus" type="primary" />
    <br>
    <van-button icon="plus" type="primary">按钮</van-button>
    <br>
    <van-button icon="https://img.yzcdn.cn/vant/user-active.png" type="info">按钮</van-button>
    <br>
    <van-button type="primary" size="large">大号按钮</van-button>
    <br>
    <van-button type="primary" size="normal">普通按钮</van-button>
    <br>
    <van-button type="primary" size="small">小型按钮</van-button>
    <br>
    <van-button type="primary" size="mini">迷你按钮</van-button>
    <br>
    <van-button type="primary" block>块级元素</van-button>
    <br>
    <van-button type="primary" url="/vant/mobile.html">URL 跳转</van-button>
    <br>
    <van-button type="primary" to="index">路由跳转</van-button>
    <br>
    <van-button color="#7232dd">单色按钮</van-button>
    <br>
    <van-button color="#7232dd" plain>单色按钮</van-button>
    <br>
    <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">渐变色按钮</van-button>
    <br>
  </div>
</template>

<script>
export default {
  name: 'VantButton',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
