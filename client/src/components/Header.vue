<template>
  <div id="header">
    <el-row type="flex" justify="space-between">
      <el-col :span="6" class="logo">
        <img src="../assets/images/logo.png" alt />
        <span>米修在线后台管理系统</span>
      </el-col>

      <el-col :span="6" class="user">
        <div class>
          <img class="avatar" src="../assets/images/avatar_default.jpg" alt />
          <div class="info">
            <span>欢迎</span>
            <span class="name">{{user.name}}</span>
          </div>
          <el-dropdown @command="ToDropDown">
            <span class="el-dropdown-link">
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="info">个人信息</el-dropdown-item>
              <el-dropdown-item command="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Header",
  data() {
    return {};
  },

  computed: {
      ...mapGetters(['user'])
  },
  created() {},
  mounted() {},
  methods: {
      ...mapActions(['clearCurrentState']),
    ToDropDown(command) {
      if (command === "info") {
        this.toInfo();
      } else {
        this.toLogout();
      }
    },
    toInfo() {},
    
    // 退出
    toLogout() {
        window.localStorage.removeItem('eleToken')
        this.clearCurrentState()
      this.$router.push({ name: "login" });
    }
  },
  components: {}
};
</script>
<style lang='scss' scoped>
@import "@/assets/css/layout.scss";
#header {
  padding: 5px;
  @include WH(100%, 60px);
  min-width: 600px;
  border-bottom: 1px solid #1f2d3d;
  background: #324057;
  color: #fff;

  .logo {
    min-width: 400px;
    img {
      margin-right: 5px;
      display: inline-block;
      @include WH(50px, 50px);
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
      font-size: 22px;
      letter-spacing: 3px;
      font-family: "Microsoft YaHei";
    }
  }

  .user {
    float: right;
    line-height: 50px;
    text-align: right;

    .avatar {
      display: inline-block;
      @include WH(40px, 40px);
      vertical-align: middle;
    }

    .info {
      padding: 0 5px;
      display: inline-block;
      vertical-align: middle;

      span {
        display: block;
        line-height: 25px;
        text-align: center;
        font-size: 12px;
      }

      .name {
        color: #409eff;
        font-weight: 700;
      }
    }
    .el-dropdown {
      color: #fff;
    }
  }
}
</style>