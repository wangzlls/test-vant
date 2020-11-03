<template>
  <div>
		<van-cell title="选择单个日期" :value="date" @click="show = true" class="cell" />
		<van-calendar v-model="show" @confirm="onConfirm" />
		<br>
  </div>
</template>

<script>
  export default {
		name: "VantCanlendar",
		data() {
    return {
      date: '',
      show: false,
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
			this.date = this.formatDate(date);
    },
  },
  }
</script>

<style scoped lang="stylus">
.cell
	width 100%
	background-color #eee
	font-size 30px
</style>
