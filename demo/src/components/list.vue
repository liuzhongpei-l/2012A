<template>
    <div @click="handleToDetile">
        <van-card :num="num" :price="price" :desc="desc" :title="title" :thumb="thumb" />
    </div>
</template>
 
<script>
export default {
    props: {
        id: [String, Number],
        num: [String, Number],
        price: [String, Number],
        desc: [String, Number],
        title: [String, Number],
        thumb: [String, Number],
    },
    data() {
        return {
            queryData: null
        }
    },
    methods: {
        handleToDetile() {
            this.$router.push({
                path: `/detile`,
                query: {
                    id: this.id,
                    num: this.num,
                    desc: this.desc,
                    title: this.title,
                    thumb: this.thumb,
                }
            })
        }
    }
}
</script>
 
<style></style>