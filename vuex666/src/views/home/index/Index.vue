<template>
    <div>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <ListCard v-for="(item, index) in shopList" :key="index" :id="item.id" :num="item.num" :price="item.price"
                    :desc="item.desc" :title="item.title" :thumb="item.thumb" />
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
import ListCard from '@/components/ListCard.vue';
import { mapState, mapActions } from 'vuex'
import { Toast } from 'vant';
export default {
    components: { ListCard },
    computed: {
        ...mapState(['shopList'])
    },
    data() {
        return {
            // 上啦是否加载完成
            finished: false,
            // 控制上啦加载状态
            loading: false,
            // 控制下拉加载状态
            refreshing: false,
            pageNum: 1,
            pageSize: 6
        }
    },
    methods: {
        ...mapActions(['getShopList']),
        onRefresh() {
            this.refreshing = true;
            setTimeout(() => {
                this.pageSize = 10
                this.getShopList({ pageNum: this.pageNum, pageSize: this.pageSize })
                this.refreshing = false
                this.finished = false
            }, 1000)
        },
        onLoad() {
            setTimeout(() => {
                if (this.refreshing) {
                    this.pageNum = 0
                    this.refreshing = false
                }
                if (this.shopList.length >= 45) {
                    this.finished = true
                } else {
                    this.pageSize += 5
                    this.getShopList({ pageNum: this.pageNum, pageSize: this.pageSize })
                    this.loading = false
                    this.finished = false

                }
            }, 1000);
        },
    },
    created() {
        this.getShopList({ pageNum: this.pageNum, pageSize: this.pageSize })
    }
}
</script>

<style></style>