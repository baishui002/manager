<template>
  <div>
            <el-table :data="tableData" border style="width: 100%" max-height="400">
        <el-table-column type="index" label="序号" width="150"></el-table-column>
        <el-table-column prop="date" label="日期" width="150"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="province" label="省份" width="120"></el-table-column>
        <el-table-column prop="city" label="市区" width="120"></el-table-column>
        <el-table-column prop="address" label="地址" width="300"></el-table-column>
        <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
        <el-table-column fixed="right" label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button
              @click="handleClick(scope.row)"
              type="warning"
              size="mini"
              class="btn-look"
            >查看</el-button>
            <el-button type="danger" size="mini">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
  name:"",
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>
