<template>
  <div>
    <van-cell title="单元格" value="内容" size="large" />
    <br>
    <van-cell title="单元格" value="内容" size="large" label="描述信息" />
    <br>
    <van-cell title="单元格" icon="location-o" />
    <br>
    <van-cell value="内容" />
    <br>
    <van-cell title="单元格" is-link />
    <br>
    <van-cell title="右侧箭头单元格" is-link value="内容" />
    <br>
    <van-cell title="单元格" is-link arrow-direction="down" value="内容" />
    <br>
    <van-cell title="URL 跳转" is-link url="/vant/mobile.html" />
    <br>
    <van-cell title="路由跳转" is-link to="index" />
    <br>
    <van-cell center title="单元格" value="内容" label="描述信息" />
    <van-cell value="内容" is-link>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <span class="custom-title">单元格</span>
        <van-tag type="danger">标签</van-tag>
      </template>
    </van-cell>

    <van-cell title="单元格" icon="shop-o">
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #right-icon>
        <van-icon name="search" class="search-icon" />
      </template>
    </van-cell>
    <van-cell-group>
      <van-cell title="单元格" value="增加了group后的单元格" />
      <van-cell title="单元格" value="增加了group后的单元格" label="描述信息" />
    </van-cell-group>
  </div>
</template>

<script>
  export default {
    name: "Cell"
  }
</script>

<style scoped>
  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
</style>