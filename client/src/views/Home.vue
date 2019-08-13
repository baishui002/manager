<template>
    <div id="home">
        <div class="con">
            <h1>米修在线</h1>
            <p>专注于线上教育, 用心做课程, 用心做服务!</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    components: {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/layout.scss";
#home {
    @include WH(100%, 100%);
    min-height: 400px;
    background: url("../assets/images/showcase.png") center/100% 100% no-repeat;
    .con {
        padding-top: 100px;
        @include WH(100%, 100%);
        text-align: center;
        background-color: rgba(0, 0, 0, .5);
        h1 {
            @include font-weight(30px, #fff);
        }
        p {
            padding-top: 20px;
            @include font-size(26px, #fff);
        }
    }
}
</style>

