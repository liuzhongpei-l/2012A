<template>
    <div>
        <div class="add_bg" v-for="(item, index) in list" :key="index">
            <div class="add" v-text="item.name" @click="toNewHref(item.url)">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['list'],
    methods: {
        toNewHref(url) {
            // this.$parent.dialogVisible = true;
            console.log(this, '123');
            this.$emit('handleTest', false)
            // window.open('http://' + url, '_blank')
        }
    },
}
</script>

<style lang="scss">
.add_bg:hover {
    background: rgba(white, $alpha: .3);
}

.add_bg {
    width: 80px;
    height: 80px;
    border-radius: 15px;
    z-index: 2;
    display: inline-block;
}

.add {
    border-radius: 50%;
    background: white;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    margin: 10px auto;

}
</style>