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
        <el-button type="primary" class="add">添加</el-button>
      </el-col>
    </el-row>
    <el-row class="content">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="province" label="省份" width="120"></el-table-column>
        <el-table-column prop="city" label="市区" width="120"></el-table-column>
        <el-table-column prop="address" label="地址" width="300"></el-table-column>
        <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Money",
  data() {
    return {
      date1: "",
      date2: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        }
      ]
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/layout.scss";
#money {
  .top {
    height: 80px;
    line-height: 80px;
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
    padding: 10px;
  }
}
</style>
