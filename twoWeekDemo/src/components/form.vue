<template>
    <div>
        <p><span>用户名</span><input type="text" v-model="formVal.username"> <span v-show="isShowUserError">请输入用户名</span></p>
        <p><span>密码</span><input type="password" v-model="formVal.password"><span v-show="isShowPassError">请输入密码</span></p>
        <van-button round type=" info" style="width:100%;" @click="handleSubmit">提交</van-button>
    </div>
</template>

<script>
export default {
    props: {
        formVal: {
            require: true,
            type: Object,
        }
    },
    model: {
        prop: 'formVal',
        event: 'sendModelVal'
    },
    data() {
        return {
            isShowUserError: false,
            isShowPassError: false
        }
    },
    created() {
        console.log(this.formVal, '123');
    },
    methods: {
        handleSubmit() {
            if (this.formVal.username.length > 0) {
                this.isShowUserError = false
                if (this.formVal.password.length > 0) {
                    this.isShowPassError = false
                    this.$emit('submit', this.formVal)
                } else {
                    this.isShowPassError = true
                }
            } else {
                this.isShowUserError = true
                if (this.formVal.password.length > 0) {
                    this.isShowPassError = false
                    this.$emit('submit', this.formVal)
                } else {
                    this.isShowPassError = true
                }
            }
        }
    }
}
</script>

<style></style>