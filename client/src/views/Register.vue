<template>
    <div id="register">
        <div class="con">
            <p class="title">米修在线后台管理系统</p>

            <el-form
                :model="regUser"
                status-icon
                :rules="rules"
                ref="regForm"
                label-width="80px"
                class="reg-form"
            >
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="regUser.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="regUser.email" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="regUser.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="password2">
                    <el-input type="password" v-model="regUser.password2"></el-input>
                </el-form-item>
                <el-form-item label="选择身份">
                    <el-select v-model="regUser.identity" placeholder="请选择">
                        <el-option label="管理员" value="manager"></el-option>
                        <el-option label="员工" value="emplyee"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="btn" @click="submitReg('regForm')">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

    </div>
</template>

<script>
import { reqRegister } from "../api";
export default {
    name: "Register",
    data() {
        let validatePass2 = (rule, value, callback) => {
            if (value !== this.regUser.password) {
                callback(new Error("两次输入密码不一致!"));
            } else {
                callback();
            }
        };
        return {
            loading: "",
            regUser: {
                name: "",
                email: "",
                password: "",
                password2: "",
                identity: ""
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: "用户名不能为空",
                        trigger: "blur"
                    },
                    {
                        min: 5,
                        max: 12,
                        message: "长度在5-12个字符之间",
                        trigger: "blur"
                    }
                ],
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
                    },
                    {
                        min: 5,
                        max: 12,
                        message: "长度在5-12个字符之间",
                        trigger: "blur"
                    }
                ],
                password2: [
                    {
                        required: true,
                        message: "密码不能为空",
                        trigger: "blur"
                    },
                    {
                        min: 5,
                        max: 12,
                        message: "长度在5-12个字符之间",
                        trigger: "blur"
                    },
                    { validator: validatePass2, trigger: "blur" }
                ]
            }
        };
    },
    created() {},
    methods: {
        submitReg(formName) {
            this.$refs[formName].validate(async valid => {
                if (valid) {
                    try {
                        this.openFullScreen();
                        const result = await reqRegister(this.regUser);
                        // console.log('result:', result)
                        this.loading.close();
                        if (result.code === 0) {
                            this.$router.push({ name: "login" });
                        } else {
                            this.$message.error(result.msg);
                        }
                    } catch (error) {
                        this.$message.error(result.msg);
                    }
                } else {
                    return false;
                }
            });
        },

        openFullScreen() {
            this.loading = this.$loading({
                lock: true,
                text: "Loading",
                spinner: "el-icon-loading",
                background: "rgba(0, 0, 0, 0.7)"
            });
        }
    },
    components: {}
};
</script>
<style lang='scss' scoped>
@import "@/assets/css/layout.scss";
#register {
    position: relative;
    @include WH(100%, 100%);
    background: url("../assets/images/bg.jpg") center/100% 100% no-repeat;
}

.con {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    @include WH(370px, 458px);

    .title {
        @include font-weight(26px, #fff, 700);
        text-align: center;
    }

    .reg-form {
        padding: 20px 40px 20px 20px;

        background: #fff;
        border-radius: 10px;

        .btn {
            width: 100%;
        }
    }
}
</style>