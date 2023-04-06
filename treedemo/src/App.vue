<template>
  <div>
    <treeSelect :isCheck="false" v-model="listData" />
  </div>
</template>

<script>
import treeSelect from './components/treeSelect.vue';
export default {
  components: { treeSelect },
  data() {
    return {
      listData: null
    }
  }
}
</script>

<style></style>