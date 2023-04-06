<template>
  <div>
    <div style="width:700px;height:700px">
      <my-card v-model="cardList" @cardClick="isShowDia = true" />
    </div>
    <my-dialog v-model="isShowDia" ref="dialog">
      <template slot-scope="{data}">
        <button @click="handleClickEnsure(data)">确定</button>
        <button @click="handleClickCale()">取消</button>
      </template>
    </my-dialog>
  </div>
</template>

<script>
import Card from './components/Card.vue';
import Dialog from './components/Dialog.vue';
import request from './utils/request';
export default {
  components: { "my-card": Card, "my-dialog": Dialog },
  data() {
    return {
      isShowDia: false,
      cardList: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      request.get('/api/getCardList').then(res => {
        console.log(res.data);
        if (res.data.code == 200) {
          this.cardList = res.data.data
        }
      })
    },
    handleClickEnsure(val) {
      this.cardList.push({
        id: new Date().getTime(),
        title: val
      })
      // this.$children[1].dialogVal = ""
      this.$refs.dialog.dialogVal = ""
      this.isShowDia = false
    },
    handleClickCale() {
      this.isShowDia = false
    }
  }
}
</script>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>