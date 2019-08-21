<template>
  <div id="login">
    <div class="con">
      <p class="title">米修在线后台管理系统</p>

      <el-form
        :model="loginUser"
        status-icon
        :rules="rules"
        ref="loginForm"
        label-width="80px"
        class="login-form"
      >
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="loginUser.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginUser.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click="submitLogin('loginForm')">登录</el-button>
        </el-form-item>
        <p class="register">
          还没有账号？现在
          <span @click="toRegister">注册</span>
        </p>
      </el-form>
    </div>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";
import { mapActions } from "vuex";
import { reqLogin } from "@/api";
import { SET_AUTHENTICATED, SET_USER } from '@/stores/mutations-types'

export default {
  name: "Login",
  data() {
    return {
      loginUser: {
        email: "",
        password: ""
      },
      rules: {
        email: [
          {
            type: "email",
            required: true,
            message: "邮箱格式不正确",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {},
  methods: {
    ...mapActions(["setAuthenticated", "setUser"]),
    submitLogin(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          try {
            const result = await reqLogin(this.loginUser);
            // 登录成功
            if (result.code === 0) {
              // 缓存token
              window.localStorage.setItem("eleToken", result.token);
              // 解析token
              const user = jwt_decode(result.token);
            
              // token存储到vuex
              this.setAuthenticated(!this.isEmpty(user));
             
              this.setUser(user);
              this.$router.push({ name: "home" });
            } else {
              this.$message.error(result.msg);
            }
          } catch (error) {
              console.log('err:', error)
            this.$message.error("出错了~~~~");
          }
        } else {
          return false;
        }
      });
    },

    toRegister() {
      this.$router.push({ name: "register" });
    },

    // 返回true或false
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    }
  },
  components: {}
};
</script>
<style lang='scss' scoped>
@import "@/assets/css/layout.scss";
#login {
  position: relative;
  @include WH(100%, 100%);
  background: url("../../assets/images/bg.jpg") center/100% 100% no-repeat;
}

.con {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @include WH(370px, 400px);

  .title {
    @include font-weight(26px, #fff, 700);
    text-align: center;
  }

  .login-form {
    padding: 20px 40px 20px 20px;
    background: #fff;
    border-radius: 10px;

    .btn {
      width: 100%;
    }
  }
  .register {
    text-align: right;
    @include font-size(12px, #333);
    span {
      color: #409eff;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>