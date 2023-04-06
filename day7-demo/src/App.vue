<template>
  <div id="app">
    <car-list :carList="listData.data" />
  </div>
</template>
<script>
import test from './components/test.vue';
import listData from './api/list'
export default {
  components: { "car-list": test },
  data() {
    return {
      flage: false,
      listData
    }
  },
  created() {
  },
  methods: {
    handleClick() {

      // this.flage = !this.flage
    },
  },
}
</script>

<style lang="scss"></style>
