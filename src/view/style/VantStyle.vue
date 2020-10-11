<template>
  <div>
    <!-- 最多显示一行 -->
    <div class="van-ellipsis">
      这是一段最多显示一行的文字，多余的内容会被省略,这是一段最多显示一行的文字，多余的内容会被省略
    </div>
    <br>
    <!-- 最多显示两行 -->
    <div class="van-multi-ellipsis--l2">
      这是一段最多显示两行的文字，多余的内容会被省略,仅当文字内容超过两行的时候，多余的内容才会被省略
    </div>
    <br>
    <!-- 最多显示三行 -->
    <div class="van-multi-ellipsis--l3">
      这是一段最多显示三行的文字，多余的内容会被省略,仅当文字内容超过两行的时候，多余的内容才会被省略，为了凑够三行字数，所以加了这些文字，结果发现最后还有一点不够
    </div>
    <!-- 上边框 -->
<!--    <div class="van-hairline&#45;&#45;top"></div>-->

<!--    &lt;!&ndash; 下边框 &ndash;&gt;-->
<!--    <div class="van-hairline&#45;&#45;bottom"></div>-->

<!--    &lt;!&ndash; 左边框 &ndash;&gt;-->
<!--    <div class="van-hairline&#45;&#45;left"></div>-->

<!--    &lt;!&ndash; 右边框 &ndash;&gt;-->
<!--    <div class="van-hairline&#45;&#45;right"></div>-->

<!--    &lt;!&ndash; 上下边框 &ndash;&gt;-->
<!--    <div class="van-hairline&#45;&#45;top-bottom"></div>-->

<!--    &lt;!&ndash; 全边框 &ndash;&gt;-->
<!--    <div class="van-hairline&#45;&#45;surround"></div>-->
    <div class="test-box" @click="toShow">
      <span>点击我，出现文字</span>
    </div>

    <div class="big-box">
      <!-- 淡入 -->
      <transition name="van-fade" duration="300">
        <div v-show="visible" class="blue">Fade</div>
      </transition>

      <!-- 上滑进入 -->
      <transition name="van-slide-up" duration="300">
        <div v-show="visible" class="black">Slide Up</div>
      </transition>

      <!-- 下滑进入 -->
      <transition name="van-slide-down" duration="300">
        <div v-show="visible" class="red">Slide Down</div>
      </transition>

      <!-- 左滑进入 -->
      <transition name="van-slide-left" duration="300">
        <div v-show="visible" class="yellow">Slide Left</div>
      </transition>

      <!-- 右滑进入 -->
      <transition name="van-slide-right" duration="300">
        <div v-show="visible" class="green">Slide Right</div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VantStyle",
    data() {
      return{
        visible:false
      }
    },
    methods:{
      toShow() {
        this.visible = true

        setTimeout(() => {
          this.visible = false
        },1000)
      }
    }
  }
</script>

<style scoped>
  .test-box{
    width: 150px;
    line-height: 50px;
    background-color: red;
  }
  .big-box{
    margin: 0 auto;
  }
  .blue{
    width: 150px;
    height: 50px;
    background-color: blue;
    margin: 0 auto;
  }
  .black{
    width: 150px;
    height: 50px;
    background-color: black;
    margin: 0 auto;
  }
  .red{
    width: 150px;
    height: 50px;
    background-color: red;
    margin: 0 auto;
  }
  .yellow{
    width: 150px;
    height: 50px;
    background-color: yellow;
    margin: 0 auto;
  }
  .green{
    width: 150px;
    height: 50px;
    background-color: green;
    margin: 0 auto;
  }
</style>