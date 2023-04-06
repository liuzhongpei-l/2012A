<template>
    <div>
        <el-input placeholder="请输入内容" v-model="showSelectval" clearable @focus="isShowTree = true"
            @clear="$refs.tree.setCheckedKeys([])">
        </el-input>
        <div class="tree_list" v-show="isShowTree">
            <el-tree ref="tree" node-key="id" :data="data" :show-checkbox="isCheck" :check-strictly="true"
                :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            <p v-if="isCheck">
                <el-button size="mini" type="primary" @click="handleEnsure">确认</el-button>
                <el-button size="mini" @click="isShowTree = false">取消</el-button>
            </p>
        </div>
    </div>
</template>

<script>
import { getShopList } from '../api/shop'
export default {
    props: {
        treeAllData: {
            type: [Number, String, Array],
            default: null
        },
        isCheck: {
            type: Boolean,
            default: false
        }
    },
    model: {
        prop: 'treeAllData',
        event: 'sendModelVal'
    },
    data() {
        return {
            showSelectval: "",
            modleVal: "",
            isShowTree: false,
            data: [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                        id: 9,
                        label: '三级 1-1-1'
                    }, {
                        id: 10,
                        label: '三级 1-1-2'
                    }]
                }]
            }, {
                id: 2,
                label: '一级 2',
                children: [{
                    id: 5,
                    label: '二级 2-1'
                }, {
                    id: 6,
                    label: '二级 2-2'
                }]
            }, {
                id: 3,
                label: '一级 3',
                children: [{
                    id: 7,
                    label: '二级 3-1'
                }, {
                    id: 8,
                    label: '二级 3-2'
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    },
    created() {
        console.log(this.getList(), 'this.getList()');
    },
    methods: {
        getList: async () => {
            let data = await getShopList()
            return data.data
        },
        handleEnsure() {
            let treeSelectData = this.$refs.tree.getCheckedNodes()
            let inpVal = []
            let modleValue = []
            treeSelectData.forEach(item => {
                inpVal.push(item.label)
                modleValue.push(item.id)
            })
            this.showSelectval = inpVal.toString()
            this.modleVal = modleValue
            this.$emit('sendModelVal', this.modleVal)
            this.isShowTree = false
        },
        handleNodeClick(data) {
            this.showSelectval = data.label
            this.modleVal = data.id
            this.$emit('sendModelVal', this.modleVal)
            this.isShowTree = false
        }
    }
}
</script>

<style lang="scss">
.tree_list {
    border: 1px solid #eee;
    border-radius: 3px;
}
</style>