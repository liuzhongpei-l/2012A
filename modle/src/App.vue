<template>
  <div>
    <treeSelect v-model="select" />
  </div>
</template>

<script>
import treeSelect from './components/treeSelect.vue';
export default {
  data() {
    return {
      select: null
    }
  },
  watch: {
    select: function (newVal, oldVal) {
      console.log(newVal, 'newVal');
      console.log(oldVal, 'oldVal');
    }
  },
  components: { treeSelect },
  methods: {

  }
}
</script>

<style></style>