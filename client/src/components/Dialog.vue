<template>
  <div id="dialog">
    <el-dialog
      :title="dialog.title"
      :visible.sync="dialog.show"
      :close-on-click-modal="false"
      :modal-append-to-body="false"
      @close="handleClose('fundForm')"
      top="30px"
    >
      <el-form
        :model="fundData"
        :rules="rules"
        ref="fundForm"
        style="margin:10px;width:auto"
        label-width="120px"
      >
        <el-form-item label="收支类型" prop="type">
          <el-select v-model="fundData.type" placeholder="收支类型">
            <el-option :label="item" :value="item" v-for="(item, index) in form_types" :key="index"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="收入描述" prop="describe">
          <el-input v-model="fundData.describe" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="收入" prop="incode">
          <el-input v-model.number="fundData.incode" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="支出" prop="expend">
          <el-input v-model.number="fundData.expend" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="账户现金" prop="cash">
          <el-input v-model.number="fundData.cash" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="fundData.remark" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="handleCancel('fundForm')">取 消</el-button>
          <el-button type="primary" @click="handleSubmit('fundForm')">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { reqAddFund, reqEditFund } from "../api";
export default {
  name: "Dialog",
  data() {
    return {
      form_types: ["提现", "提现手续费", "充值", "优惠券", "充值礼券", "转账"],

      formLabelWidth: "120px",
      rules: {
        type: [
          {
            required: true,
            message: "类型不能为空",
            trigger: "blur"
          }
        ],
        describe: [
          {
            required: true,
            message: "描述不能为空",
            trigger: "blur"
          }
        ],
        incode: [
          {
            required: true,
            message: "收入不能为空",
            trigger: "blur"
          },
          {
            type: "number",
            message: "收入只能输入数字",
            trigger: "blur"
          }
        ],
        expend: [
          {
            required: true,
            message: "支出不能为空",
            trigger: "blur"
          },
          {
            type: "number",
            message: "支出只能输入数字",
            trigger: "blur"
          }
        ],
        cash: [
          {
            required: true,
            message: "现金不能为空",
            trigger: "blur"
          },
          {
            type: "number",
            message: "现金只能输入数字",
            trigger: "blur"
          }
        ]
        // remark: [
        //   {
        //     required: true,
        //     message: "不能为空",
        //     trigger: "blur"
        //   }
        // ],
      }
    };
  },
  props: {
    dialog: {
      type: Object,
      default: {}
    },
    fundData: {
      type: Object,
      default: {}
    },
    handleUpdateFund: {
      type: Function,
      default: function() {}
    }
  },
  methods: {
    // 取消
    handleCancel(formName) {
      this.dialog.show = false;
      this.$refs[formName].resetFields();
      this.$refs[formName].clearValidate();
    },

    // 添加、修改的提交
    async handleSubmit(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          try {
              let {option} = this.dialog
              console.log('option:', this.fundData)
              let reslut
              if ( option === 'add') {
                  reslut = await reqAddFund(this.fundData)
              } else {
                  reslut = await reqEditFund(this.fundData)
              }
            
            if (reslut.code === 0) {
              this.handleUpdateFund();
              this.dialog.show = false;
              this.$message({
                message: option === 'add'?"添加成功": '修改成功',
                type: "success"
              });
            } else {
              this.$message({
                message: option === 'add'?"添加失败": '修改失败',
                type: "error"
              });
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

    // 关闭
    handleClose(formName) {
      this.dialog.show = false;
      this.$refs[formName].resetFields();
      this.$refs[formName].clearValidate();
    }
  },

  created() {
    // console.log(this.dialogShow)
  }
};
</script>

<style lang="scss" scoped>
</style>
