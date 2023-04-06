<template>
    <div>
        777
    </div>
</template>

<script>
export default {
    beforeCreate() {
        console.log(9);
    },
    created() {
        console.log(10);
    },
    beforeMount() {
        console.log(11);
    },
    mounted() {
        console.log(12);
    },
    beforeUpdate() {
        console.log(13);
    },
    updated() {
        console.log(14);
    },
    beforeDestroy() {
        console.log(15);
    },
    destroyed() {
        console.log(16);
    }
}
// 12349 10 11 12 5678 董
// 
</script>

<style></style>