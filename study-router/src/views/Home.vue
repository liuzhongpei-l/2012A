<template>
    <div>
        <h3 @click="$router.push('/home/list')">Home</h3>
        <router-link to="/home/list">Home</router-link>
        <router-view />
    </div>
</template>

<script>
export default {
    created() {
        console.log(this.$router, 'router')
        console.log(this.$route, 'route')
    },

}
</script>

<style></style>