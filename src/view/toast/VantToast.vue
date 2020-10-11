<template>
  <div>
    <van-cell
            class="box1"
            title="文字提示"
            size="large"
            is-link
            @click="$toast('此处是文字提示')"/>
    <van-cell
            class="box1"
            title="加载提示"
            size="large"
            is-link
            @click="$toast.loading({message:'加载中。。。',forbidClick:true})"/>
    <van-cell
            class="box1"
            title="加载成功"
            size="large"
            is-link
            @click="$toast.success('成功文案')"/>
    <van-cell
            class="box1"
            title="加载失败"
            size="large"
            is-link
            @click="$toast.fail('失败文案')"/>
    <van-cell
            class="box1"
            title="自定于图标"
            size="large"
            is-link
            @click="$toast({message:'自定义图标',icon:'like-o'})"/>
    <van-cell
            class="box1"
            title="自定于图标"
            size="large"
            is-link
            @click="$toast({message:'自定义图标',icon:'https://img.yzcdn.cn/vant/logo.png'})"/>
    <van-cell
            class="box1"
            title="自定于图标"
            size="large"
            is-link
            @click="$toast.loading({message:'加载中。。。',forbidClick:true,loadingType: 'spinner'})"/>
    <van-cell
            class="box1"
            :title=updateMessage
            size="large"
            @click="showCustomizedToast"/>
  </div>
</template>

<script>
  export default {
    name: "VantToast",
    data() {
      return{
        text4: (second) => `倒计时 ${second} 秒`,
        updateMessage:'动态更新提示'
      }
    },
    components: {
    },
    methods:{
      showCustomizedToast() {
        const toast = this.$toast.loading({
          duration: 0,
          forbidClick: true,
          message: this.text4(3),
        });
        let second = 3;
        const timer = setInterval(() => {
          second--;
          if (second) {
            toast.message = this.text4(second);
          } else {
            clearInterval(timer);
            this.$toast.clear();
          }
        }, 1000);
      }
    }
  }
</script>

<style scoped>
  .box1{
    box-shadow: 1px 1px 1px #888888;
  }
</style>