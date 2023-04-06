<template>
  <div>
    <span>仓库数据num：{{ this.$store.state.num }}</span>
    <span>辅助函数使用仓库数据num：{{ num }}</span>
    <span>仓库getters ：{{ $store.getters.myNum }}</span>
    <span>仓库getters 辅助函数：{{ myNum }}</span>
    <button @click="handlevuexStudy">num++</button>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
// vuex 的辅助函数统一全部挂在到了当前组件的实例上面，我们可以直接通过this进行访问其方法与变量
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  components: { HelloWorld },
  computed: {// getters
    ...mapState(['num']),
    ...mapGetters(['myNum'])
  },
  data() { // state
    return {
      nums: 111
    }
  },
  methods: {
    ...mapActions(['addNum']),
    ...mapMutations(['add']),
    handlevuexStudy() {
      // this.$store.dispatch('addNum')  // 访问Actions
      // this.$store.commit('add')  // 访问Mutations
      // this.addNum()
      this.add()
    }
  }
}
</script>

<style></style>