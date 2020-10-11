<template>
  <div>
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
<!--    <van-popup v-model="show">王者来老杀</van-popup>-->
    <br>
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
<!--    <van-popup v-model="show" position="top" closeable :style="{height:'30%'}">王者来老杀</van-popup>-->
<!--    <van-popup v-model="show" position="top"  close-icon="close" :style="{height:'30%'}">王者来老杀</van-popup>-->
    <van-popup
            class="father-box"
            v-model="show"
            round
            position="bottom"
            closeable
            :style="{height:'30%'}">
      <span class="test">王者来老杀</span>
    </van-popup>
  </div>
</template>

<script>
  export default {
    name: "VantPopup",
    data() {
      return {
        show:false
      }
    },
    methods:{
      showPopup() {
        this.show = true
      }
    }
  }
</script>

<style scoped>
  .father-box{
    text-align: center;
  }
  .test{
    color: red;
  }
</style>