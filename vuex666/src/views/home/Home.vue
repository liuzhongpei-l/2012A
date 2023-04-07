<template>
    <div class="wrap">
        <div class="header">
            <van-nav-bar title="标题" left-text="返回" left-arrow>
                <template #right>
                    <van-icon name="search" size="18" @click="handleSearch" />
                </template>
            </van-nav-bar>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
        <div class="footer">
            <van-tabbar route v-model="active">
                <van-tabbar-item icon="home-o" to="/home/index">首页</van-tabbar-item>
                <van-tabbar-item icon="search" to="/home/class">分类</van-tabbar-item>
                <van-tabbar-item icon="friends-o" to="/home/car">购物车</van-tabbar-item>
                <van-tabbar-item icon="setting-o" to="/home/my">我的</van-tabbar-item>
            </van-tabbar>
        </div>
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
        handleSearch() {
            console.log(111)
        }
    }
}
</script>

<style lang="scss" scoped> .wrap {
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: column;

     .header {
         height: 46px;
         width: 100%;
     }

     .main {
         flex: 1;
         padding: 5px;
         overflow: scroll;
     }

     .footer {
         width: 100%;
         height: 50px;
     }
 }
</style>