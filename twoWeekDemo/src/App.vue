<template>
  <div>
    <!-- <my-form v-model="myFormData" @submit="handleSubmit" /> -->
    <!-- <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img01.yzcdn.cn/vant/ipad.jpeg" /> -->
    <my-card v-for="(item, index) in shopList" :key="index" :num="item.num" :price="item.price" :desc="item.desc"
      :title="item.title" :thumb="item.thumb" />
  </div>
</template>

<script>
import form from './components/form.vue';
import CardVue from './components/Card.vue';
import request from './utils/request'
export default {
  components: { "my-form": form, "my-card": CardVue },
  data() {
    return {
      // myFormData: {
      //   username: "",
      //   password: ""
      // }
      shopList: []
    }
  },
  methods: {
    handleSubmit(val) {
      console.log(val, 'val');
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      request.get('/api/getList').then(res => {
        this.shopList = res.data.data
      })
    }
  }
}
</script>

<style></style>