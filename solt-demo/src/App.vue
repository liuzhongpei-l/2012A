<template>
  <div id="app">
    <!-- <solt-study :cData="soltData">
      <template slot="header">
        <h1>header</h1>
      </template>
      <template slot-scope="{scope}">
        <h1 @click="handleTest(scope)">main</h1>
      </template>
      <template slot="footer">
        <h1>footer</h1>
      </template>
    </solt-study> -->
    <button @click="handleClickDialog">show</button>
    <!-- <my-dialog :visible.sync="dialogVisible" title="提示111" @closed="handleClose" @opened="handleOpen">
      <template>
        <h1>1111</h1>
      </template>
      <template slot="footer">
        <el-button type="primary" @click="dialogVisible = false">确定</el-button>
        <el-button @click="dialogVisible = false">取消</el-button>
      </template>
    </my-dialog> -->
    <!-- <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" @closed="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog> -->
    <my-table :data="tableData">
      <template slot-scope="{scope}">
        <el-button @click="testClick(scope)">cs</el-button>
      </template>
    </my-table>
  </div>
</template>

<script>
import soltStudy from './components/soltStudy.vue';
import MyDialog from './components/MyDialog.vue';
import Table from './components/Table.vue';
import axios from 'axios'
export default {
  components: { "solt-study": soltStudy, "my-dialog": MyDialog, "my-table": Table },
  data() {
    return {
      dialogVisible: false,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }],
      soltData: {
        one: "lzp",
        two: "ly",
        three: "wyn"
      },
      newList: []
    }
  },
  created() {
    axios.get('/api/list').then(res => {
      console.log(res, 123);
      this.newList = res.data
    })
  },
  methods: {
    testClick(scope) {
      console.log(scope, 'scope')
    },
    handleOpen() {
      console.log(2222);
    },
    handleClose() {
      console.log(11111);
    },
    handleClickDialog() {
      this.dialogVisible = true
    },
    handleTest(scope) {  // 我们自己的点击main里面的标签用的
      console.log(scope, 'scope');
    },
    handleClick(scope) {// 表格的点击查看事件
      console.log(scope, 'scope');
    }
  }
}
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  list-style: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>