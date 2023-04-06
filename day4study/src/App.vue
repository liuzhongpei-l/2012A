<template>
    <div>
        <!-- <input type="text" name="" id="" v-model="message">
        <p v-for="(item, index) in list" :key="index" v-text="item"></p>
        <button @click="handleClick" v-if="flage" v-bind:class="flage ? 'avatar' : ''">已关注</button>
        <button v-on:click="handleClick" v-else>未关注</button>
        <span v-text="message"></span>
        <div v-html="inner"></div> -->
        <tab />
    </div>
</template>

<script>
import Tab from './components/Tab.vue'
export default {
    components: { Tab },
    data() {
        return {
            message: "6666",
            list: ['zs', 'ls', 'ww', 'll'],
            flage: false,
            inner: "<div><span>王月娜88</span></div>"
        }
    },
    watch: {},
    computed: {},
    methods: {
        handleClick() {
            this.flage = !this.flage
        }
    },
    beforeCreate() { },
    created() { },
    beforeMount() { },
    mounted() { },
    beforeUpdate() { },
    updated() { },
    beforeDestroy() { },
    destroyed() { },
}
</script>

<style>
.avatar {
    color: blueviolet;
}
</style>