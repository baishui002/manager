<template>
    <el-row class="left-menu">
        <el-col>
            <el-menu
                class="el-menu-vertical-demo"
                background-color="#324057"
                text-color="#fff"
                active-text-color="#409eff"
            >
                <router-link to="/home">
                    <el-menu-item index="1">
                        <span slot="title">首页</span>
                    </el-menu-item>
                </router-link>

                <el-submenu :index="item.path" v-for="(item, index) in items" :key="index">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span>{{item.name}}</span>
                    </template>

                    <el-menu-item-group v-for="(citem, cindex) in item.children" :key="cindex">
                        <router-link :to="item.path">
                            <el-menu-item :index="citem.path">{{citem.name}}</el-menu-item>
                        </router-link>
                    </el-menu-item-group>
                </el-submenu>
                <!-- <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span>信息管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">个人信息</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>-->
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "LeftNav",
    data() {
        return {
            items: [
                {
                    icon: "el-icon-printer",
                    name: "资金管理",
                    path: "fund",
                    children: [{ path: "fundlist", name: "资金流水" }]
                },
                {
                    icon: "el-icon-tickets",
                    name: "信息管理",
                    path: "info",
                    children: [{ path: "infoshow", name: "个人信息" }]
                }
            ]
        };
    },

    computed: {},
    created() {},
    mounted() {},
    methods: {},
    components: {}
};
</script>
<style lang='scss' scoped>
@import "@/assets/css/layout.scss";
.left-menu {
    position: fixed;
    top: 70px;
    left: 0;
    z-index: 99;
    height: 100%;
    background: #324057;

    .el-menu-vertical-demo {
        width: 200px;
        min-height: 400px;
    }
    .el-menu {
        border: none;
    }
    .el-submenu {
        width: 200px;
    }
}
.el-submenu .el-menu-item {
    text-indent: 2em;
}
</style>