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
                <p class="register">还没有账号？现在<span @click="toRegister">注册</span></p>
            </el-form>

        </div>
    </div>
</template>

<script>
import { reqLogin } from "../api";
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
        submitLogin(formName) {
            this.$refs[formName].validate(async valid => {
                if (valid) {
                    try {
                        const result = await reqLogin(this.loginUser);
                        if (result.code === 0) {
                            this.$router.push({ name: "home" });
                        } else {
                            this.$message.error(result.msg);
                        }
                    } catch (error) {
                        this.$message.error(result.msg);
                    }
                } else {
                    return false
                }
            })
        },

        toRegister() {
            this.$router.push({name: 'register'})
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
    background: url("../assets/images/bg.jpg") center/100% 100% no-repeat;
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