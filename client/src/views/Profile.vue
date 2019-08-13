<template>
  <div id="profile">
    <el-row class="profile-con">
      <el-col :span="8" class="left"></el-col>
      <el-col :span="16" class="right">
        <div class="right-con">
          <p class="user">
            <i class="el-icon-user-solid"></i>
            <span>{{user.name}}</span>
          </p>
          <p class="identity">
            <i class="el-icon-s-tools"></i>
            <span>{{user.identity ==='manager'?'管理员': '普通员工'}}</span>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "",
  data() {
    return {};
  },
  computed: {
      ...mapState(['user'])
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/layout.scss";

#profile {
  height: 100%;
  .profile-con {
    height: 100%;
  }
  .left {
    height: 100%;
    background: #fff;
  }
  .right {
    position: relative;

    height: 100%;
    .right-con {
      position: absolute;
      left: 0;
      top: 45%;
      transform: translateY(-50%);
    }
    p {
      @include font-size(30px);
      &:hover {
          color: blue
      }
    }
    span {
      margin-left: 10px;
    }
    .user {
      padding-bottom: 30px;
    }
    // .identity {
    //     @include font-size(20px);
    //     span {
    //         margin-left: 10px;
    //     }
    // }
  }
}
</style>
