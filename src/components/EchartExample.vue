<script>
import * as echarts from 'echarts'

export default {
  name: 'EchartExample',
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      // 获取图表的 DOM 容器
      const chartDom = this.$refs.chart
      // 初始化 ECharts 实例
      const myChart = echarts.init(chartDom)

      // 设置图表的配置项
      const option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }

      // 使用配置项设置图表
      myChart.setOption(option)
    }
  }
}
</script>

<template>
  <div>
    <h1>ECharts 示例</h1>
    <div ref="chart" style="width: 100%; height: 400px;"></div>
  </div>

</template>

<style scoped>
/* 图表容器的样式 */
div[ref="chart"] {
  width: 100%;
  height: 100%;
}
</style>