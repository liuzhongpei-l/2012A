<template>
    <div>
        <button @click="flage = !flage">{{ flage ? "取消" : "编辑" }}</button>
        <my-books :list="booksList" :isEdit="flage" />
        <button @click="handleDel">删除</button>
    </div>
</template>

<script>
import books from '../../../components/books.vue';
import { mapState, mapActions } from 'vuex'
export default {
    data() {
        return {
            flage: false
        }
    },
    components: { "my-books": books },
    computed: {
        ...mapState(['booksList'])
    },
    methods: {
        ...mapActions(['delCheckedData']),
        handleDel() {
            this.delCheckedData()
        }
    }
}
</script>

<style></style>