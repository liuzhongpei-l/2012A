<template>
    <div class="wrap">
        <img :src="icons" alt="">
        <div class="history_list">
            <input type="text" class="searchInp" placeholder="在Google上搜索" @focus="handleSearchIsFocus(true)"
                @blur="handleSearchIsFocus(false)" @keydown.enter="search" v-model="searchVal">
            <p class="history_item" v-show="historyListFlage" v-for="(item, index) in historyList" :key="index">
                <span v-text="item"></span>
                <b>X</b>
            </p>
        </div>
        <!-- <div class="add_bg" v-for="(item, index) in shortcutList" :key="index">
            <div class="add" v-text="item.name" @click="toNewHref(item.url)">
            </div>
        </div> -->
        <List :list="shortcutList" @handleTest="testEmit" />
        <div class="add_bg" @click="dialogVisible = true">
            <div class="add">
                ➕
            </div>
        </div>
        <div class="dialog_wrap" v-if="dialogVisible">
            <div class="dialog_content">
                <span>{{ dialogTitle }}</span>
                <p>
                    <span>名称</span>
                    <input type="text" v-model="dialogForm.name">
                </p>
                <p>
                    <span>网址</span>
                    <input type="text" v-model="dialogForm.url">
                </p>
                <button @click="handleEnsure">确定</button>
                <button @click="dialogVisible = false">取消</button>
            </div>
        </div>
    </div>
</template>

<script>
import icon from '../assets/google_logo.svg'
import List from './list.vue'
export default {
    components: { List },
    data() {
        return {
            dialogForm: {
                name: "",
                url: ""
            },
            dialogVisible: false,
            dialogTitle: "添加快捷方式",
            icons: icon,
            historyListFlage: false,
            searchVal: "",
            historyList: [],
            shortcutList: []
        }
    },
    methods: {
        testEmit(val) {
            console.log(val, 'val');
        },
        toNewHref(url) {
            window.open('http://' + url, '_blank')
        },
        handleEnsure() {
            this.dialogVisible = false
            this.shortcutList.push(this.dialogForm)
            this.dialogForm = {
                name: "",
                url: ""
            }
        },
        search() {
            this.historyList.push(this.searchVal)
        },
        handleSearchIsFocus(flage) {
            this.historyListFlage = flage
        }
    }
}
</script>

<style lang="scss">
.dialog_content {
    width: 500px;
    height: 300px;
    background: white;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -250px;
    margin-top: -150px;
}

.dialog_wrap {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(black, $alpha: .5);
    top: 0;
    left: 0;
}

.wrap {
    width: 560px;
    height: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -280px;
    margin-top: -200px;
    text-align: center;
}

.history_list {
    width: 612px;
    background: white;
    border-radius: 20px;
    z-index: 999;
}

.history_item:hover {
    background: rgba(#ccc, $alpha: .3);
}

.history_item {
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

.add_bg:hover {
    background: rgba(white, $alpha: .3);
}

.add_bg {
    width: 80px;
    height: 80px;
    border-radius: 15px;
    z-index: 2;
}

.add {
    border-radius: 50%;
    background: white;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    margin: 10px auto;

}

.searchInp {
    border-radius: 20px;
    outline: none;
    border: none;
    width: 560px;
    height: 45px;
    padding-left: 50px;
}
</style>