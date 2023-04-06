<template>
  <div>
    <van-nav-bar :fixed="true" :title="title" left-arrow @click-left="onClickLeft" />

    <div style="margin-top:50px;" v-if="isLogin == 'login'">
      <van-form @submit="onSubmit">
        <van-field v-model="loginForm.username" name="username" label="用户名" placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="loginForm.password" type="password" name="password" label="密码" placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]" />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">登陆</van-button>
        </div>
      </van-form>
      <p class="word">
        <a href="#" @click="goTo('registry')">前往注册</a>
        <a href="#" @click="goTo('forget')">忘记密码</a>
      </p>
    </div>

    <div style="margin-top:50px;" v-if="isLogin == 'registry'">
      <van-form @submit="onSubmit">
        <van-field v-model="registryForm.username" name="username" label="昵称" placeholder="昵称"
          :rules="[{ required: true, message: '请填写昵称' }]" />
        <van-field v-model="registryForm.phone" name="phone" label="手机号" placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]" />
        <van-field v-model="registryForm.password" type="password" name="password" label="密码" placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]" />
        <van-field v-model="registryForm.ensurePassword" type="password" name="ensurePassword" label="确认密码"
          placeholder="确认密码" :rules="[{ validator, message: '请确认密码' }]" />
        <van-field name="uploader" label="文件上传">
          <template #input>
            <van-uploader :after-read="afterRead" />
          </template>
        </van-field>
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">注册</van-button>
        </div>
      </van-form>
    </div>

    <div style="margin-top:50px;" v-if="isLogin == 'forget'">
      <van-form @submit="onSubmit">
        <van-field v-model="editForem.phone" name="phone" label="手机号" placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]" />
        <van-field v-model="editForem.code" name="code" label="验证码" placeholder="验证码"
          :rules="[{ required: true, message: '请填写密码' }]" />
        <van-field v-model="editForem.newPassword" type="password" name="newPassword" label="新密码" placeholder="新密码"
          :rules="[{ required: true, message: '请填写新密码' }]" />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">修改</van-button>
        </div>
      </van-form>
    </div>

  </div>
</template>

<script>
// import vantView from './components/vantView.vue';
// import elementView from './components/elementView.vue';
import { Toast } from 'vant';
export default {
  // components: { vantView, elementView }
  data() {
    return {
      title: "登录",
      loginForm: {
        username: "",
        password: "",
      },
      registryForm: {
        username: "",
        password: "",
        ensurePassword: "",
        uploader: "",
        phone: ""
      },
      editForem: {
        phone: "",
        code: "",
        newPassword: ""
      },
      isLogin: "login",
      dictionary: {
        "login": "登陆",
        "registry": "注册",
        "forget": "修改密码",
      }
    }
  },
  methods: {
    validator(val) {
      if (val == this.registryForm.password) {
        return true
      } else {
        return false
      }
    },
    afterRead(file) {
      this.registryForm.uploader = file.file
    },
    goTo(name) {
      this.isLogin = name
      this.title = this.dictionary[name]
    },
    onSubmit(values) {
      console.log('submit', values);
    },
    onClickLeft() {
      Toast('返回');
    }
  }
}
</script>

<style>
.word {
  display: flex;
  justify-content: space-around;
}
</style>