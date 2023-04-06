<template>
  <div></div>
</template>
<script>
export default {
  name: "HomeView",
  components: {},
  data: {
    return: {
      message: "Hello world",
      num: 0
    }
  },
  watch: {
    message: function (newVal, oldVal) {
    }
  },
  computed: {
    newNum: function () {
      return this.num + 1
    }
  },
  methods: {
    handleClick() {

    }
  },
  beforeCreate() { },
  created() { },
  beforeMount() { },
  mounted() { },
  beforeUpdate() { },
  updated() { },
  beforeDestroy() { },
  destroyed() { },
}
</script>
<style></style>