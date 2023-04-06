<template>
    <div class="wrap" v-if="isShowDia">
        <div class="wrap-content">
            <p class="wrap-content-title">
                <span>弹窗标题</span>
                <span class="xxx" @click="$emit('sendModelEvent', false)">X</span>
            </p>
            <div class="wrap-content-main">
                <input type="text" v-model="dialogVal">
            </div>
            <div class="wrap-content-footer">
                <slot :data="dialogVal"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isShowDia: Boolean,
    },
    model: {
        prop: "isShowDia",
        event: "sendModelEvent",
    },
    data() {
        return {
            dialogVal: ""
        }
    },
}
</script>

<style lang="scss" scoped>
.wrap {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba($color: #000000, $alpha: .4);

    .wrap-content {
        width: 500px;
        height: 400px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -250px;
        margin-top: -200px;
        background: white;
        border-radius: 5px;
        display: flex;
        flex-direction: column;

        .wrap-content-title {
            height: 30px;
            border-bottom: 1px solid #eee;
            display: flex;
            padding: 5px 10px;
            justify-content: space-between;

            .xxx {
                cursor: pointer;
            }
        }

        .wrap-content-main {
            flex: 1;
        }

        .wrap-content-footer {
            height: 50px;
            width: 100%;
        }
    }
}
</style>