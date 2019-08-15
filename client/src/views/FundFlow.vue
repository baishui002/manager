<template>
  <div id="money">
    <el-row class="top" type="flex" justify="space-between">
      <el-col :span="16" class="time-box">
        <span>按照时间筛选:</span>&nbsp;
        <el-date-picker v-model="date1" type="datetime" placeholder="选择日期时间"></el-date-picker>&nbsp;--
        <el-date-picker v-model="date2" type="datetime" placeholder="选择日期时间"></el-date-picker>
        <el-button type="primary" class="filter">筛选</el-button>
      </el-col>
      <el-col :span="2" class="add-box">
        <el-button type="primary" class="add" @click="handleAdd">添加</el-button>
      </el-col>
    </el-row>
    <el-row class="content">
      <el-table :data="tableData" border style="width: 100%" max-height="400px">
        <el-table-column label="序号" width="50" type="index" align="center"></el-table-column>
        <el-table-column label="创建时间" width="150" align="center">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="收入类型" width="120" align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.type }}</span>
            <!-- <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>-->
          </template>
        </el-table-column>
        <el-table-column label="收入描述" width="180" align="center" style="{color: red}">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.describe }}</span>
          </template>
        </el-table-column>
        <el-table-column label="收入" width="120" align="center">
          <template slot-scope="scope">
            <span style="color:#00d053">{{ scope.row.incode }}</span>
          </template>
        </el-table-column>
        <el-table-column label="支出" width="120" align="center">
          <template slot-scope="scope">
            <span style="color: red">{{ scope.row.expend }}</span>
          </template>
        </el-table-column>
        <el-table-column label="账户现金" width="120" align="center">
          <template slot-scope="scope">
            <span style="color: skyblue">{{ scope.row.cash }}</span>
          </template>
        </el-table-column>
        <el-table-column label="备注" width="180" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.remark }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button size="mini" type="warning" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <!-- <Dialog :dialogShow="dialogShow" /> -->
    <el-dialog title="收货地址" :visible.sync="dialogShow">
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
import { Dialog } from "../components/Dialog";
export default {
  name: "Money",
  data() {
    return {
      dialogShow: false,
      date1: "",
      date2: "",
      tableData: [
        {
          date: "2016-05-02",
          type: "提现",
          describe: "上海市",
          incode: "300",
          expend: "100",
          cash: "200",
          remark: "上海市普8 弄"
        },
        {
          date: "2016-05-04",
          type: "提现",
          describe: "上海市",
          incode: "300",
          expend: "100",
          cash: "200",
          remark: "上海市普8 弄"
        },
        {
          date: "2016-05-01",
          type: "提现",
          describe: "上海市",
          incode: "300",
          expend: "100",
          cash: "200",
          remark: "上海市普8 弄"
        },
        {
          date: "2016-05-03",
          type: "提现",
          describe: "上海市",
          incode: "300",
          expend: "100",
          cash: "200",
          remark: "上海市普8 弄"
        }
      ],
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    handleAdd() {
      this.dialogShow = true;
    },
    handleClick(row) {
      console.log(row);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
  components: {
    Dialog
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/layout.scss";
#money {
  // @include WH(100%, 100%);
  .top {
    height: 60px;
    line-height: 60px;
    .time-box {
      padding-left: 10px;
      min-width: 720px;
    }
    .filter {
      margin-left: 10px;
    }
    .add-box {
      padding-right: 20px;
      text-align: right;
    }
    .add {
      padding: 8px 10px;
    }
  }

  .content {
    padding: 0 10px;
    .btn-look {
      margin-right: 10px;
    }
  }
}
</style>
