<template>
    <div>
        <p v-for="(item, index) in data" :key="index">
            <span class="tb_item">{{ item.date }}</span>
            <span class="tb_item">{{ item.name }}</span>
            <span class="tb_item">{{ item.province }}</span>
            <span class="tb_item">{{ item.city }}</span>
            <span class="tb_item">{{ item.address }}</span>
            <slot :scope="item"></slot>
        </p>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default: []
        }
    }
}
</script>

<style>
.tb_item {
    display: inline-block;
    margin: 5px;
}
</style>