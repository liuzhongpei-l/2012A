<template>
    <div class="wrap">
        <div class="wrap_menu">
            <el-menu router default-active="/home/index" class="el-menu-vertical-demo" background-color="#545c64"
                text-color="#fff" active-text-color="#ffd04b">
                <el-menu-item index="/home/index">
                    <i class="el-icon-menu"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">系统设置</span>
                    </template>
                    <el-menu-item index="/home/system">系统设置</el-menu-item>
                    <el-menu-item index="/home/user">用户管理</el-menu-item>
                </el-submenu>
                <el-menu-item index="#">
                    <i class="el-icon-menu"></i>
                    <span slot="title">系统监控</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="wrap_content">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            defActive: "/home/index"
        }
    }
}
</script>

<style lang="scss" scoped>
.el-menu {
    height: 100%;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.wrap {
    height: 100%;
    width: 100%;
    display: flex;

    .wrap_menu {
        height: 100%;
        width: 200px;
    }

    .wrap_content {
        padding: 10px;
        flex: 1;
    }
}
</style>