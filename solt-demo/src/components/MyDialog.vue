<template>
    <div v-if="visible" class="dialog_wrap">
        <div class="dialog_cotent">
            <div class="dialog_header">
                <span class="title">{{ title }}</span>
                <b class="icon" @click="close">X</b>
            </div>
            <div class="dialog_main">
                <slot></slot>
            </div>
            <div class="dialog_footer">
                <div style="width:70%;"></div>
                <div style="width:30%;">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        visible: {
            require: true,
            type: Boolean
        },
        title: {
            type: String,
            default: '提示'
        }
    },
    data() {
        return {}
    },
    watch: {
        visible: function (newVal, oldVal) {
            // console.log(newVal, 'newVal');
            // console.log(oldVal, 'oldVal');
            if (!newVal) this.$emit('closed');
            if (newVal) this.$emit('opened');

        }
    },
    methods: {
        close() {
            this.$emit('update:visible', false)
        }

    }
}
</script>

<style lang="scss">
.dialog_wrap {
    background: rgba($color: #000000, $alpha: .3);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
}

.dialog_cotent {
    background: white;
    border-radius: 5px;
    padding: 10px;
    width: 500px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -250px;
    margin-top: -175px;
    display: flex;
    flex-direction: column;
}

.dialog_header {
    display: flex;
    justify-content: space-between;
    height: 50px;

    .title {
        margin-left: 10px;
    }

    .icon {
        cursor: pointer;
        margin-right: 10px;
    }
}

.dialog_main {
    flex: 1;
}

.dialog_footer {
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
}
</style>