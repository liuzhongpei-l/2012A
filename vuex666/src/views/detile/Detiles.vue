<template>
    <div>
        <van-swipe class="lun" :autoplay="3000">
            <van-swipe-item v-for="(image, index) in detileData.thumb" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe>
        <div>
            <p>{{ detileData.title }}</p>
            <p>{{ detileData.desc }}</p>
            <p>¥ {{ detileData.price }}</p>
        </div>
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" />
            <van-goods-action-icon icon="cart-o" text="购物车" />
            <van-goods-action-icon icon="shop-o" text="店铺" />
            <van-goods-action-button color="#be99ff" type="warning" text="加入购物车" @click="onClickAddCar" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import { Toast } from 'vant';
export default {
    created() {
        this.getData()
    },
    computed: {
        ...mapState(['detileData'])
    },
    data() {
        return {
            images: [],
        }
    },
    methods: {
        ...mapActions(['getDetileData', 'addCarList']),
        getData() {
            this.getDetileData(this.$route.params.id)
        },
        onClickAddCar() {
            // 将详情数据加入购物车
            // console.log(this.detileData, 'thiss.detileData');
            this.addCarList(this.detileData)
            this.$router.push('/home/car')
            // 跳转到购物车
        },
    }
}
</script>

<style lang="scss">
.lun {
    width: 100%;
    height: 240px;

    img {
        width: 100%;
        height: 100%;
    }
}
</style>