<template>
    <div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="用户名">
                <el-input v-model="formLabelAlign.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="formLabelAlign.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="" @click="hanClick">登陆</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import request from '@/utils/request';
export default {
    data() {
        return {
            labelPosition: 'right',
            formLabelAlign: {
                username: '',
                password: '',
            }
        };
    },
    methods: {
        hanClick() {
            request.post('/api/user/login', this.formLabelAlign).then(res => {
                console.log(res.data);
                if (res.data.code == 200) {
                    window.localStorage.setItem('token', res.data.data)
                    this.$router.push('/')
                }
            })
        }
    }
}
</script>

<style></style>