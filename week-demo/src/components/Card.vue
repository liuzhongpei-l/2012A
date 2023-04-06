<template>
    <div class="wrap">
        <div class="title">
            <span>卡片名称</span>
            <a href="#" @click="$emit('cardClick')">新增内容</a>
        </div>
        <div class="content">
            <p v-for="(item, index) in cardList" :key="index">{{ item.title }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cardList: Array
    },
    model: {
        prop: "cardList",
        event: "sendModelEvent"
    },
}
</script>

<style lang="scss" scoped>
.wrap {
    width: 700px;
    height: 600px;
    border: 1px solid #eee;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 2px 2px 2px #ccc;
    background: white;
    display: flex;
    flex-direction: column;

    .title {
        height: 60px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        line-height: 60px;

        a {
            text-decoration: none;
        }
    }

    .content {
        flex: 1;
    }
}
</style>