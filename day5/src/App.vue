<template>
    <div>
        <input type="text" v-model="secherVal" @keydown.enter="handleKeyDown">
        <shopList :list="listData"></shopList>
    </div>
</template>

<script>
import shopList from './components/shopList.vue'
import './api/list'
import request from './utils/request'
export default {
    components: { shopList },
    data() {
        return {
            secherVal: "",
            oldListData: [],//模拟数据接收列表
            listData: []//渲染列表 筛选列表数组
        }
    },
    methods: {
        handleKeyDown() {//搜索框回车事件
            this.listData = this.oldListData.filter(item => item.name.match(this.secherVal))
        },
        getShopList() {
            request.get('/api/getShopList').then(res => {
                if (res.data.code == 200) {
                    // 将请求回来的数据赋值给data中转换为响应式数据
                    this.oldListData = res.data.data
                    this.listData = res.data.data
                }
            })
        }
    },
    beforeCreate() {
        console.log(1);
    },
    created() {
        this.getShopList()
        this.listData = this.oldListData
        console.log(2);
    },
    beforeMount() {
        console.log(3);
    },
    mounted() {
        console.log(4);
    },
    beforeUpdate() {
        console.log(5);
    },
    updated() {
        console.log(6);
    },
    beforeDestroy() {
        console.log(7);
    },
    destroyed() {
        console.log(8);
    }
}
</script>

<style></style>