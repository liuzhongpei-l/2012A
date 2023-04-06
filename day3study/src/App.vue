<template>
    <div id="main">
        <HelloWord></HelloWord>
    </div>
</template>

<script>
import HelloWord from 'components/HelloWord';
export default {
    name: "App",
    components: { HelloWord }
}
</script>

<style>
#main {
    color: red;
}
</style>