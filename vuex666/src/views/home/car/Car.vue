<template>
    <div>
        <ListCard v-for="(item, index) in carList" :key="index" :id="item.id" :num="item.num" :price="item.price"
            :desc="item.desc" :title="item.title" :thumb="item.thumb[0]" />
        <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
            <van-checkbox v-model="checked">全选</van-checkbox>
            <template #tip>
                你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
            </template>
        </van-submit-bar>
    </div>
</template>

<script>
import ListCard from '@/components/ListCard.vue';
import { mapState } from 'vuex'
export default {
    components: { ListCard },
    created() { },
    data() {
        return {
            checked: false
        }
    },
    computed: {
        ...mapState(['carList'])
    },
    methods: {
        onSubmit() { },
        onClickEditAddress() { }
    }
}
</script>

<style></style>