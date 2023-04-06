<template>
    <div class="wrap">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot :scope="list"></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
export default {
    props: {
        cData: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            list: [
                {
                    name: "lzp",
                    age: 18
                },
                {
                    name: "ly",
                    age: 88
                },
                {
                    name: "wyn",
                    age: 98
                },
            ]
        }
    },
}
</script>

<style lang="scss">
.wrap {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    header {
        width: 100%;
        height: 80px;
        background: red;
    }

    main {
        flex: 1;
        background: pink;
    }

    footer {
        height: 80px;
        width: 100%;
        background: yellow;
    }
}
</style>