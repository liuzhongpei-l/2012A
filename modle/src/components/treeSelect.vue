<template>
    <div>
        <el-input placeholder="请选择内容" v-model="inputShowVal" clearable @focus="isShowTree = true">
        </el-input>
        <div class=" tree" v-show="isShowTree">
            <el-tree ref="tree" :data="data" node-key="id" :props="defaultProps" @node-click="handleNodeClick"
                :show-checkbox="isCheck" :check-strictly="true"></el-tree>
            <p v-show="isCheck">
                <el-button size="mini" type="primary" @click="handleCheckClick">确定</el-button>
                <el-button size="mini" @click="isShowTree = false">取消</el-button>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        select: {
            type: [Array, String, Number],
            default: null
        },
        isCheck: {
            type: Boolean,
            default: false
        }
    },
    model: {
        prop: 'select',
        event: 'updateModel'
    },
    data() {
        return {
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
            inputShowVal: null,
            sendModleVal: null,
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    },
    methods: {
        handleCheckClick() {
            let dataList = this.$refs.tree.getCheckedNodes()
            let inputVal = []
            let modelVal = []
            dataList.forEach(item => {
                inputVal.push(item.label)
                modelVal.push(item.id)
            });
            this.inputShowVal = inputVal.toString()
            this.sendModleVal = modelVal
            this.$emit('updateModel', this.sendModleVal)
            this.isShowTree = false
            this.$refs.tree.setCheckedKeys([]);
        },
        handleNodeClick(data) {
            this.inputShowVal = data.label
            this.sendModleVal = data.id
            this.$emit('updateModel', this.sendModleVal)
            this.isShowTree = false
        }
    }
}
</script>

<style lang="scss">
.tree {
    background: white;
    border: 1px solid #eee;
    border-radius: 3px;
}
</style>