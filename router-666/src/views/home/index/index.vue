<template>
    <div class="wrap">
        <el-tree :default-expand-all="true" :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="userId" label="用户编号">
            </el-table-column>
            <el-table-column prop="userName" label="用户名称">
            </el-table-column>
            <el-table-column prop="nickName" label="用户昵称">
            </el-table-column>
            <el-table-column prop="dept.deptName" label="部门">
            </el-table-column>
            <el-table-column prop="phonenumber" label="手机号">
            </el-table-column>
            <el-table-column prop="status" label="状态">
                <template slot-scope="{row}">
                    <el-switch disabled v-model="dic[row.status]">
                    </el-switch>
                </template>
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="活动名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>

export default {
    data() {
        return {
            dialogFormVisible: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formLabelWidth: '120px',
            dic: {
                "0": false,
                "1": true,
            },
            filterData: [
                {
                    "createBy": "admin",
                    "createTime": "2023-02-03 11:11:26",
                    "updateBy": null,
                    "updateTime": null,
                    "remark": "管理员",
                    "userId": 1,
                    "deptId": 103,
                    "userName": "admin",
                    "nickName": "若依",
                    "email": "ry@163.com",
                    "phonenumber": "15888888888",
                    "sex": "1",
                    "avatar": "",
                    "password": null,
                    "status": "1",
                    "delFlag": "0",
                    "loginIp": "183.221.31.105",
                    "loginDate": "2023-04-03T16:53:10.000+08:00",
                    "dept": {
                        "createBy": null,
                        "createTime": null,
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "deptId": 103,
                        "parentId": null,
                        "ancestors": null,
                        "deptName": "研发部门",
                        "orderNum": null,
                        "leader": "若依",
                        "phone": null,
                        "email": null,
                        "status": null,
                        "delFlag": null,
                        "parentName": null,
                        "children": []
                    },
                    "roles": [],
                    "roleIds": null,
                    "postIds": null,
                    "roleId": null,
                    "admin": true
                },
                {
                    "createBy": "admin",
                    "createTime": "2023-02-03 11:11:26",
                    "updateBy": null,
                    "updateTime": null,
                    "remark": "测试员",
                    "userId": 2,
                    "deptId": 105,
                    "userName": "ry",
                    "nickName": "若依",
                    "email": "ry@qq.com",
                    "phonenumber": "15666666666",
                    "sex": "1",
                    "avatar": "",
                    "password": null,
                    "status": "0",
                    "delFlag": "0",
                    "loginIp": "113.110.164.248",
                    "loginDate": "2023-04-03T16:49:55.000+08:00",
                    "dept": {
                        "createBy": null,
                        "createTime": null,
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "deptId": 105,
                        "parentId": null,
                        "ancestors": null,
                        "deptName": "测试部门",
                        "orderNum": null,
                        "leader": "若依",
                        "phone": null,
                        "email": null,
                        "status": null,
                        "delFlag": null,
                        "parentName": null,
                        "children": []
                    },
                    "roles": [],
                    "roleIds": null,
                    "postIds": null,
                    "roleId": null,
                    "admin": false
                }
            ],
            tableData: [
                {
                    "createBy": "admin",
                    "createTime": "2023-02-03 11:11:26",
                    "updateBy": null,
                    "updateTime": null,
                    "remark": "管理员",
                    "userId": 1,
                    "deptId": 103,
                    "userName": "admin",
                    "nickName": "若依",
                    "email": "ry@163.com",
                    "phonenumber": "15888888888",
                    "sex": "1",
                    "avatar": "",
                    "password": null,
                    "status": "1",
                    "delFlag": "0",
                    "loginIp": "183.221.31.105",
                    "loginDate": "2023-04-03T16:53:10.000+08:00",
                    "dept": {
                        "createBy": null,
                        "createTime": null,
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "deptId": 103,
                        "parentId": null,
                        "ancestors": null,
                        "deptName": "研发部门",
                        "orderNum": null,
                        "leader": "若依",
                        "phone": null,
                        "email": null,
                        "status": null,
                        "delFlag": null,
                        "parentName": null,
                        "children": []
                    },
                    "roles": [],
                    "roleIds": null,
                    "postIds": null,
                    "roleId": null,
                    "admin": true
                },
                {
                    "createBy": "admin",
                    "createTime": "2023-02-03 11:11:26",
                    "updateBy": null,
                    "updateTime": null,
                    "remark": "测试员",
                    "userId": 2,
                    "deptId": 105,
                    "userName": "ry",
                    "nickName": "若依",
                    "email": "ry@qq.com",
                    "phonenumber": "15666666666",
                    "sex": "1",
                    "avatar": "",
                    "password": null,
                    "status": "0",
                    "delFlag": "0",
                    "loginIp": "113.110.164.248",
                    "loginDate": "2023-04-03T16:49:55.000+08:00",
                    "dept": {
                        "createBy": null,
                        "createTime": null,
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "deptId": 105,
                        "parentId": null,
                        "ancestors": null,
                        "deptName": "测试部门",
                        "orderNum": null,
                        "leader": "若依",
                        "phone": null,
                        "email": null,
                        "status": null,
                        "delFlag": null,
                        "parentName": null,
                        "children": []
                    },
                    "roles": [],
                    "roleIds": null,
                    "postIds": null,
                    "roleId": null,
                    "admin": false
                }
            ],
            data: [
                {
                    "id": 100,
                    "label": "若依科技",
                    "children": [
                        {
                            "id": 101,
                            "label": "深圳总公司",
                            "children": [
                                {
                                    "id": 103,
                                    "label": "研发部门"
                                },
                                {
                                    "id": 104,
                                    "label": "市场部门"
                                },
                                {
                                    "id": 105,
                                    "label": "测试部门"
                                },
                                {
                                    "id": 106,
                                    "label": "财务部门"
                                },
                                {
                                    "id": 107,
                                    "label": "运维部门"
                                }
                            ]
                        },
                        {
                            "id": 102,
                            "label": "长沙分公司",
                            "children": [
                                {
                                    "id": 108,
                                    "label": "市场部门"
                                },
                                {
                                    "id": 109,
                                    "label": "财务部门"
                                }
                            ]
                        }
                    ]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        };
    },
    created() {
    },
    methods: {
        handleClick(row) {
            this.dialogFormVisible = true
            console.log(row);
        },
        handTest(row) {
            console.log(row.status, 'sc');
        },
        handleNodeClick(data) {
            this.tableData = this.filterData.filter(item => item.deptId == data.id)
        }
    }
};
</script>

<style lang="scss" scoped>
.el-tree {
    width: 200px;
}

.wrap {
    display: flex;
}
</style>