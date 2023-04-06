<template>
    <div>
        <img :src="url" alt="">
        <div v-if="list.length > 0">
            <p v-for="(item, index) in list" :key="index">
                <img :src="item.shopImg" alt="">
                <span>商品名称：{{ item.name }}</span>
                <span>商店名：{{ item.shoper }}</span>
                <span>商品价格：{{ item.price }}</span>
                <span>商品描述：{{ item.wrod }}</span>
            </p>
        </div>
        <div v-else>暂无数据</div>
    </div>
</template>

<script>
import aImg from '../images/a.jpg'
export default {
    props: {
        list: {
            type: Array,
            default: []
        }
    },
    // props: ['list'],
    data() {
        return {
            shopData: [],
            url: ""
        }
    },
    created() {
        this.url = aImg
    },
    mounted() {
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.demo {
    .dat {
        color: red;
    }
}
</style>