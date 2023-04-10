<template>
    <div>
        {{ queryData.title }}
        <button @click="handleAdd">+入书架</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    computed: {
    },
    data() {
        return {
            queryData: null
        }
    },
    created() {
        this.queryData = this.$route.query
    },
    methods: {
        handleAdd() {
            this.addBooksList(this.queryData)
            this.$router.push('/home/books')
        },
        ...mapActions(['addBooksList'])
    }
}
</script>

<style></style>