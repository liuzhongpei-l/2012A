<template>
  <div id="app">
    <Search />
  </div>
</template>
<script>
import Search from './components/Search.vue';
export default {
  components: { Search },
}
</script>

<style lang="scss">
html,
body,
#app {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  background: url('./assets/bg.jpg') no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}
</style>
