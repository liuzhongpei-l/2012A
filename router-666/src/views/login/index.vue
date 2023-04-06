<template>
    <div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="账号">
                <el-input v-model="formLabelAlign.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="formLabelAlign.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登陆</el-button>
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
        onSubmit() {
            request.post('/api/user/login', this.formLabelAlign).then(res => {
                if (res.data.code == 200) {
                    this.$message({
                        message: res.data.message,
                        type: 'success'
                    });
                    window.localStorage.setItem('token', res.data.data)
                    this.$router.push('/')
                } else {
                    this.$message({
                        message: res.data.message,
                        type: 'warning'
                    });
                }
            })
        }
    }
}
</script>

<style></style>