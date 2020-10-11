<template>
  <div id="app">
    <router-view><test-vant/></router-view>
  </div>
</template>

<script>
  import TestVant from "./components/TestVant";

export default {
  name: 'App',
  components: {
    TestVant
  }
}
</script>

<style>

</style>
