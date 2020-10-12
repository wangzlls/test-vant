<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh(true)" >
    <p>刷新次数: {{ counter }}</p>
<!--    <ul>-->
<!--      <li>内容填充1</li>-->
<!--      <li>内容填充2</li>-->
<!--      <li>内容填充3</li>-->
<!--      <li>内容填充4</li>-->
<!--      <li>内容填充5</li>-->
<!--      <li>内容填充6</li>-->
<!--      <li>内容填充7</li>-->
<!--      <li>内容填充8</li>-->
<!--      <li>内容填充9</li>-->
<!--      <li>内容填充10</li>-->
<!--      <li>内容填充11</li>-->
<!--      <li>内容填充12</li>-->
<!--      <li>内容填充13</li>-->
<!--      <li>内容填充14</li>-->
<!--      <li>内容填充15</li>-->
<!--      <li>内容填充16</li>-->
<!--      <li>内容填充17</li>-->
<!--      <li>内容填充18</li>-->
<!--      <li>内容填充19</li>-->
<!--      <li>内容填充20</li>-->
<!--      <li>内容填充21</li>-->
<!--      <li>内容填充22</li>-->
<!--      <li>内容填充23</li>-->
<!--      <li>内容填充24</li>-->
<!--      <li>内容填充25</li>-->
<!--      <li>内容填充26</li>-->
<!--      <li>内容填充27</li>-->
<!--      <li>内容填充28</li>-->
<!--      <li>内容填充29</li>-->
<!--      <li>内容填充30</li>-->
<!--      <li>内容填充31</li>-->
<!--      <li>内容填充32</li>-->
<!--      <li>内容填充33</li>-->
<!--      <li>内容填充34</li>-->
<!--      <li>内容填充35</li>-->
<!--      <li>内容填充36</li>-->
<!--      <li>内容填充37</li>-->
<!--      <li>内容填充38</li>-->
<!--      <li>内容填充39</li>-->
<!--      <li>内容填充40</li>-->
<!--      <li>内容填充41</li>-->
<!--      <li>内容填充42</li>-->
<!--      <li>内容填充43</li>-->
<!--      <li>内容填充44</li>-->
<!--      <li>内容填充45</li>-->
<!--      <li>内容填充46</li>-->
<!--      <li>内容填充47</li>-->
<!--      <li>内容填充48</li>-->
<!--      <li>内容填充49</li>-->
<!--      <li>内容填充50</li>-->
<!--    </ul>-->
    <div class="box"></div>
  </van-pull-refresh>
</template>

<script>
  export default {
    name: "VantPullRefresh",
    data() {
      return {
        counter: 0,
        isLoading: false
      }
    },
    methods: {
      onRefresh() {
        setTimeout(() => {
          this.$toast({message:'刷新成功'})
          this.isLoading = false
          this.counter++
        },1000)
      }
    }
  }
</script>

<style scoped>
  .box{
    width: 100%;
    height: 1500px;
    background-color: #fff;
  }
</style>