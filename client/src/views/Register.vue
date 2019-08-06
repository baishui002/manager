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
                    <el-input type="password" v-model="regUser.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input type="password" v-model="regUser.email" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model.number="regUser.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="password2">
                    <el-input v-model.number="regUser.password2"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitReg('regForm')">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
 
    </div>
</template>

<script>
export default {
    name: "Register",
    data() {
        let validatePass2 = (rule, value, callback) => {
            if (value !== this.registerUser.password) {
                callback(new Error("两次输入密码不一致!"));
            } else {
                callback();
            }
        };
        return {
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
    methods: {
        submitReg(formName) {
            console.log(1, formName);
            this.$refs[formName].validate(valid => {
                if (valid) {
                    alert("submit!");
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        }
    },
    computed: {},
    created() {},
    mounted() {},
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
    }
}
</style>