<template>
    <div @click="$router.push(`/detile/${id}`)">
        <van-checkbox v-model="checked">
            <van-card :num="num" :price="price" :desc="desc" :title="title" :thumb="thumb" />
        </van-checkbox>
    </div>
</template>

<script>
export default {
    props: {
        num: [String, Number],
        price: [Number, String],
        desc: [String],
        title: [String],
        thumb: [String],
        id: [String, Number],
    }, data() {
        return {
            checked: false
        }
    }
}
</script>

<style></style>