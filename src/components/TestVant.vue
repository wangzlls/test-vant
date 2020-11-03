<template>
  <div>
    <div class="container">
      <div  class="box" @click="toVantButton">
        VantButton
        <br>
        按钮
      </div>
      <div class="box" @click="toVantCell">
        VantCell
        <br>
        单元格
      </div>
      <div class="box" @click="toVantIcon">
        VantIcon
        <br>
        图标
      </div>
      <div class="box" @click="toVantImage">
        VantImage
        <br>
        图片
      </div>
      <div class="box" @click="toVantLayout">
        VantLayout
        <br>
        布局
      </div>
      <div class="box" @click="toVantPopup">
        VantPopup
        <br>
        弹出层
      </div>
      <div class="box" @click="toVantStyle">
        VantStyle
        <br>
        内置样式
      </div>
      <div class="box" @click="toVantToast">
        VantToast
        <br>
        轻提示
      </div>
      <div class="box" @click="toVantPullRefresh">
        VantPullRefresh
        <br>
        下拉加载
      </div>
      <div class="box" @click="toVantList">
        VantList
        <br>
        上拉加载
      </div>
      <div class="box" @click="toVantSticky">
        VantSticky
        <br>
        黏贴效果
      </div>
      <div class="box" @click="toVantCanlendar">
        VantCanlendar
        <br>
        日历
      </div>
      <div class="box" @click="toRound">
        Round
        <br>
        抽奖转圈
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TestVant",
    components:{
    },
    methods:{
      toVantButton() {
        this.$router.push('/vantbutton')
      },
      toVantCell() {
        this.$router.push('/vantcell')
      },
      toVantIcon() {
        this.$router.push('/vanticon')
      },
      toVantImage() {
        this.$router.push('/vantimage')
      },
      toVantLayout(){
        this.$router.push('/vantlayout')
      },
      toVantPopup() {
        this.$router.push('/vantpopup')
      },
      toVantStyle(){
        this.$router.push('/vantstyle')
      },
      toVantToast(){
        this.$router.push('/vanttoast')
      },
      toVantPullRefresh() {
        this.$router.push('/vantpullrefresh')
      },
      toVantList(){
        this.$router.push('/vantlist')
      },
      toVantSticky() {
        this.$router.push('/vantsticky')
      },
      toVantCanlendar() {
        this.$router.push('/vantcanlendar')
      },
      toRound() {
        this.$router.push('/round')
      }
    }
  }
</script>

<style scoped>
  .container {
    position: relative;
    width: 100%;
  }
  .box{
    width: 100px;
    line-height: 30px;
    padding: 20px;
    background-color: greenyellow;
    text-align: center;
    display: inline-block;
  }
  .box:nth-child(even){
    float: right;
  }
  .box:nth-child(odd){
    float: left;
  }
  .box:nth-child(n+3) {
    margin-top: 50px;
  }
</style>
