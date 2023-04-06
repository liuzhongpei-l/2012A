<template>
  <div id="app">
    <header>
      <van-nav-bar title="标题" left-arrow />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <van-tabbar route v-model="active">
        <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/class" icon="search">分类</van-tabbar-item>
        <van-tabbar-item replace to="/car" icon="friends-o">购物车</van-tabbar-item>
        <van-tabbar-item replace to="/my" icon="setting-o">我的</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;

  header {
    height: 46px;
    width: 100%;
  }

  main {
    flex: 1;
  }

  footer {
    height: 50px;
    width: 100%;
  }
}
</style>
