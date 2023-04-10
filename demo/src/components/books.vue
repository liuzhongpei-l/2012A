<template>
    <div class="wrap">
        <div class="list_item" v-for="(item, index) in list" :key="index">
            <van-checkbox v-model="item.isChecked" v-show="isEdit" @click="hanChangeChecked(item)"></van-checkbox>
            <img :src="item.thumb" alt="">
            <span>{{ item.title }}</span>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: {
        list: [Array],
        isEdit: [Boolean]
    },
    data() {
        return {
            ss: false
        }
    },
    methods: {
        ...mapActions(['editBooksList']),
        hanChangeChecked(item) {
            if (item.isChecked == true) {
                this.editBooksList({ ...item, checked: false })
            } else {
                this.editBooksList({ ...item, checked: true })
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.wrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .list_item {
        width: 100px;
        height: 150px;

        img {
            width: 100%;
            height: 130px;
        }

    }
}
</style>