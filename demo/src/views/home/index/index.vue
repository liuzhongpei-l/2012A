<template>
    <div>
        <my-list v-for="(item, index) in list" :key="index" :id="item.id" :num="item.num" :desc="item.desc"
            :title="item.title" :thumb="item.url" />
    </div>
</template>

<script>
import lists from '../../../components/list.vue';
import { mapState, mapActions } from 'vuex'
export default {
    components: { "my-list": lists },
    computed: {
        ...mapState(['booksList', 'list'])
    },
    created() {
        this.getList()
    },
    methods: {
        ...mapActions(['getList'])

    }
}
</script>

<style></style>