<template>
    <div class="wrap">
        <el-container>
            <el-aside width="200px">
                <el-menu router default-active="/home/user" class="el-menu-vertical-demo" background-color="#545c64"
                    text-color="#fff" active-text-color="#ffd04b">
                    <el-menu-item index="/home/index">
                        <i class="el-icon-s-home"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-submenu index="/home/user">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>系统管理</span>
                        </template>
                        <el-menu-item index="/home/user">用户管理</el-menu-item>
                        <el-menu-item index="/home/system">系统设置</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="#">
                        <i class="el-icon-video-camera-solid"></i>
                        <span slot="title">系统监控</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.wrap,
.el-container,
.el-menu {
    width: 100%;
    height: 100%;
}

.el-header,
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
}
</style>