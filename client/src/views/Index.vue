<template>
    <div id="index">
        <Header />
        <LeftMenu />
        <div class="rightCon">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header";
import LeftMenu from "@/components/LeftMenu";

export default {
    name: "Index",
    data() {
        return {};
    },

    computed: {},
    created() {},
    mounted() {},
    methods: {},
    components: {
        Header,
        LeftMenu
    }
};
</script>
<style lang='scss' scoped>
@import "@/assets/css/layout.scss";

#index {
    @include WH(100%, 100%);
    overflow: hidden;

    .rightCon {
        width: calc(100% - 200px);
        height: calc(100% - 70px);
        position: relative;
        left: 200px;
        top: 0;
        background-color: #fff;
    }
}
</style>