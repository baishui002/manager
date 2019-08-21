<template>
    <div id="myChart"></div>
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/bar");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

export default {
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },

    computed: {},
    created() {},
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById("myChart"));
            // 绘制图表
            myChart.setOption({
                title: { text: "ECharts 入门示例", x: "center" },
                tooltip: {
                    // trigger: "item",
                    // formatter: "{a} <br/>{b} : {c} "
                },
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                
                series: [
                    {
                        name: "销量",
                        type: "bar",
                        data: [5, 20, 36, 10, 10, 20],
                        itemStyle: {
                    normal: {
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                                "#C1232B",
                                "#B5C334",
                                "#FCCE10",
                                "#E87C25",
                                "#27727B",
                                "#FE8463",
                                "#9BCA63",
                                "#FAD860",
                                "#F3A43B",
                                "#60C0DD",
                                "#D7504B",
                                "#C6E579",
                                "#F4E001",
                                "#F0805A",
                                "#26C0C0"
                            ];
                            return colorList[params.dataIndex];
                        },
                        label: {
                            show: true,
                            position: "outer"
                        }
                    }
                },
                    }
                ]
            });
        }
    },
    components: {}
};
</script>
<style lang='scss' scoped>
#myChart {
    width: 500px;
    height: 500px;
    background: #fff;
}
</style>