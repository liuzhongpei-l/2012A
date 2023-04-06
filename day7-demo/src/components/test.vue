<template>
    <div>
        <p class="carlist_item" v-for="(item) in carList" :key="item.id">
            <img :src="item.shopImg" alt="">
            <span>{{ item.shopName }}</span>
            <span>{{ item.price }}</span>
            <span>{{ item.mis }}</span>
            <button @click="handleClick('j', item)">-</button>
            <span>{{ item.num }}</span>
            <button @click="handleClick('a', item)">+</button>
        </p>
        <div>
            总价：{{ allPrice }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        carList: {
            type: Array,
            default: []
        }
    },
    computed: {
        allPrice: function () {
            let all = 0
            this.carList.forEach(ite => {
                all += ite.num * ite.price
            })
            return all
        }
    },
    created() {
        console.log(this.carList, '123');
    },
    methods: {
        handleClick(num, item) {
            let newCarList = [...this.carList]
            newCarList.forEach(ite => {
                if (ite.id == item.id) {
                    if (num == 'j') {
                        if (ite.num > 1) {
                            ite.num -= 1
                        }
                    } else {
                        ite.num += 1
                    }
                }
            })
            console.log(newCarList, 'newCarList')
        }
    }
}
</script>

<style></style>