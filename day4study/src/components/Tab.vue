<template>
    <div>
        <span v-for="(item, index) in list" :key="index" v-text="item.title"
            :class="choseIndex == index ? 'title active' : 'title'" v-on:click="handleClickTitle(index)"></span>
        <div>
            <p v-for="(ite, ind) in list[choseIndex].children" :key="ind">商品名称：{{ ite.title }} 商品价格：{{ ite.price }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            choseIndex: 0,
            list: [
                {
                    title: "精选",
                    children: [
                        {
                            title: "茶具",
                            price: "100"
                        },
                        {
                            title: "钥匙扣",
                            price: "10"
                        },
                        {
                            title: "电热壶",
                            price: "120"
                        }
                    ]
                },
                {
                    title: "食品",
                    children: [
                        {
                            title: "旺仔",
                            price: "10"
                        },
                        {
                            title: "王中王",
                            price: "5"
                        },
                        {
                            title: "卫龙",
                            price: "10"
                        }
                    ]
                },
                {
                    title: "时尚",
                    children: [
                        {
                            title: "包包",
                            price: "1000"
                        },
                        {
                            title: "项链",
                            price: "2000"
                        },
                        {
                            title: "金戒指",
                            price: "4000"
                        }
                    ]
                },
            ]
        }
    },
    methods: {
        handleClickTitle(index) {
            this.choseIndex = index;
        }
    }
}
</script>

<style>
.active {
    color: red;
}

.title {
    display: inline-block;
    margin: 5px;
    padding: 5px;
    border: 1px solid black;
}
</style>