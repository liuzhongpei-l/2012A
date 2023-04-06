<template>
    <div class="wrap">
        <div class="wrap_tree">
            <el-tree :default-expand-all="true" :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </div>
        <div class="wrap_table">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="userId" label="用户编号" width="180">
                </el-table-column>
                <el-table-column prop="userName" label="用户名称" width="180">
                </el-table-column>
                <el-table-column prop="nickName" label="用户昵称">
                </el-table-column>
                <el-table-column prop="dept.deptName" label="部门">
                </el-table-column>
                <el-table-column prop="phonenumber" label="手机号">
                </el-table-column>
                <el-table-column prop="status" label="状态">
                    <template slot-scope="{row}">
                        <el-switch disabled v-model="dictionary[row.status]" active-color="#13ce66"
                            inactive-color="#ff4949">
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
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dictionary: {
                "0": false,
                "1": true,
            },
            oldData: [
                {
                    "createBy": "admin",
                    "createTime": "2023-02-03 11:11:26",
                    "updateBy": null,
                    "updateTime": null,
                    "remark": "管理员",
                    "userId": 1,
                    "fatherdeptId": 101,
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
                    "loginIp": "120.197.114.222",
                    "loginDate": "2023-04-04T14:44:07.000+08:00",
                    "dept": {
                        "createBy": null,
                        "createTime": null,
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "fatherdeptId": 101,
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
                    "fatherdeptId": 101,
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
                    "loginIp": "113.111.133.57",
                    "loginDate": "2023-04-04T14:22:11.000+08:00",
                    "dept": {
                        "createBy": null,
                        "createTime": null,
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "fatherdeptId": 101,
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
                    "fatherdeptId": 101,
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
                    "loginIp": "120.197.114.222",
                    "loginDate": "2023-04-04T14:44:07.000+08:00",
                    "dept": {
                        "createBy": null,
                        "createTime": null,
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "fatherdeptId": 101,
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
                    "fatherdeptId": 101,
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
                    "loginIp": "113.111.133.57",
                    "loginDate": "2023-04-04T14:22:11.000+08:00",
                    "dept": {
                        "createBy": null,
                        "createTime": null,
                        "updateBy": null,
                        "updateTime": null,
                        "remark": null,
                        "fatherdeptId": 101,
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
    methods: {
        handleClick(row) {
            console.log(row, 'row');
        },
        handleNodeClick(data) {
            console.log(data);
            // {
            //     "id": 101,
            //         "label": "深圳总公司",
            //             "children": [
            //                 {
            //                     "id": 103,
            //                     "label": "研发部门"
            //                 },
            //                 {
            //                     "id": 104,
            //                     "label": "市场部门"
            //                 },
            //                 {
            //                     "id": 105,
            //                     "label": "测试部门"
            //                 },
            //                 {
            //                     "id": 106,
            //                     "label": "财务部门"
            //                 },
            //                 {
            //                     "id": 107,
            //                     "label": "运维部门"
            //                 }
            //             ]
            // }

            // {
            //     "id": 104,
            //         "label": "市场部门"
            // }
            if (data.children) {
                this.tableData = this.oldData.filter(item => item.fatherdeptId == data.id)
                console.log(this.tableData, 'this.tableData');
            } else {
                this.tableData = this.oldData.filter(item => item.deptId == data.id)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.wrap {
    display: flex;

    .wrap_tree {
        width: 200px;
        height: 100%;
    }

    .wrap_table {
        flex: 1;
    }
}
</style>