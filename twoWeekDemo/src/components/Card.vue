<template>
    <div class="wrap">
        <img :src="thumb" alt="" class="wrap_img">
        <span class="wrap_title">{{ title }}</span>
        <span class="wrap_desc">{{ desc }}</span>
        <span class="wrap_price">¥{{ price }}</span>
        <span class="wrap_num">x{{ num }}</span>
    </div>
</template>

<script>
export default {
    props: {
        num: [Number, String],
        price: [Number, String],
        desc: [Number, String],
        title: [Number, String],
        thumb: [Number, String],
    }
}
</script>

<style lang="scss">
.wrap {
    width: 100%;
    height: 105px;
    padding: 8px 16px;
    position: relative;
    background: #f3f3f3;

    .wrap_img {
        position: absolute;
        width: 88px;
        height: 88px;
        top: 8px;
        left: 16px;
    }

    .wrap_title {
        position: absolute;
        top: 8px;
        left: 112px;
    }

    .wrap_desc {
        position: absolute;
        top: 25px;
        left: 112px;
    }

    .wrap_price {
        position: absolute;
        bottom: 20px;
        left: 112px;
    }

    .wrap_num {
        position: absolute;
        bottom: 20px;
        right: 40px;
    }
}
</style>