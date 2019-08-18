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
      <el-table :data="tableData" border style="width: 100%" max-height="350px">
        <el-table-column label="序号" width="50" type="index" align="center"></el-table-column>
        <el-table-column label="创建时间" width="240" align="center">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="收入类型" width="120" align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.type }}</span>
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
    <el-row class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="paginations.current_page"
        :page-sizes="paginations.page_sizes"
        :page-size="paginations.page_size"
        :layout="paginations.layout"
        :total="paginations.total"
      ></el-pagination>
    </el-row>
    <Dialog :dialog="dialog" :fundData="fundData" :handleUpdateFund="handleUpdateFund"/>
  </div>
</template>

<script>
import Dialog from "../components/Dialog";
import { reqAllFund, reqDelFund } from "../api";
export default {
  name: "Money",
  data() {
    return {
      dialog: {
        show: false,
        title: "",
        option: ""
      },
        paginations: {
            current_page: 1,
            total: 10,
            page_size: 5,
            page_sizes: [5, 10, 15],
            layout:'total,sizes,prev,pager,next,jumper' // 翻页属性
        },
      date1: "",
      date2: "",
      tableData: [],
      fundData: {
        type: "",
        describe: "",
        incode: "",
        expend: "",
        cash: "",
        remark: ""
      }
    };
  },
  created() {
    this.getFund();
  },
  methods: {
    async getFund() {
        let obj = {
            size: this.paginations.page_size,
            page: this.paginations.current_page
        }
      const result = await reqAllFund(obj);
      if (result.code === 0) {
          this.paginations.total = result.data.count
        this.tableData = result.data.data;
      } else {
        this.$message({
          message: "请求成功",
          type: "error"
        });
      }
    },

    // 添加
    handleAdd() {
      this.dialog = {
        title: "添加资金流水",
        show: true,
        option: "add"
      };
    },

    // 更新
    handleUpdateFund() {
      this.getFund();
    },

    // 修改
    handleEdit(index, row) {
      //   console.log(index, row);
      this.dialog = {
        title: "修改资金流水",
        show: true,
        option: "edit"
      };
      this.fundData = row;
    },

    // 删除
    async handleDelete(index, row) {
      let { _id } = row;
      try {
        const result = await reqDelFund(_id);
        if (result.code === 0) {
          this.getFund();
          this.$message({
            message: "删除成功",
            type: "success"
          });
        } else {
          this.$message({
            message: "删除失败",
            type: "error"
          });
        }
      } catch (error) {
        console.log("err:", error);
        this.$message({
          message: "删除失败",
          type: "error"
        });
      }
    },

     // 每页数量
    handleSizeChange(val) {
        this.paginations.page_size = val
        this.getFund()    
    },

    // 跳转第几页
    handleCurrentChange(val) {
        this.paginations.current_page = val
        this.getFund()
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
    // max-height: 500px;
    .btn-look {
      margin-right: 10px;
    }
  }

  .pagination {
      margin-top: 20px;
      padding-right: 20px;
      text-align: right;
  }
}
</style>
