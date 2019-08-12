<template>
    <div id="index">
        <Header />
        <LeftNav />
        <router-view></router-view>
    </div>
</template>

<script>
import Header from "@/components/Header";
import LeftNav from "@/components/LeftNav";

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
        LeftNav
    }
};
</script>
<style lang='scss' scoped>
#index {
}
</style>