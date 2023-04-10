<template>
    <div class="wrap">
        <header></header>
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <van-tabbar v-model="active">
                <van-tabbar-item icon="home-o" to="/home/index">首页</van-tabbar-item>
                <van-tabbar-item icon="search" to="/home/task">任务</van-tabbar-item>
                <van-tabbar-item icon="friends-o" to="/home/place">邀请</van-tabbar-item>
                <van-tabbar-item icon="setting-o" to="/home/books">书架</van-tabbar-item>
                <van-tabbar-item icon="setting-o" to="/home/my">我的</van-tabbar-item>
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
    }
}
</script>

<style lang="scss" scoped>
.wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    header {
        width: 100%;
        height: 50px;
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