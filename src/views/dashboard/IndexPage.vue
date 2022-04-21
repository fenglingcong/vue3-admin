<template>
  <a-row :gutter="[8, 8]">
    <a-col v-bind="itemLayout">
      <a-card title="雷达图数据" :bordered="false">
        <radar-data
        />
      </a-card>
    </a-col>
    <a-col v-bind="itemLayout">
      <a-card title="柱状图" :bordered="false">
        <bar-chart
        />
      </a-card>
    </a-col>
    <a-col v-bind="itemLayout">
      <a-card title="饼状图" :bordered="false">
        <pie-chart
        />
      </a-card>
    </a-col>
    <a-col v-bind="itemLayout">
      <a-card title="面积图" :bordered="false">
        <area-chart
        />
      </a-card>
    </a-col>
    <a-col v-bind="itemLayout">
      <a-card title="水波图" :bordered="false">
        <water-chart
        />
      </a-card>
    </a-col>
  </a-row>
</template>

<script setup>
import RadarData from './components/RadarData';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import AreaChart from './components/AreaChart';
import WaterChart from './components/WaterChart';

const itemLayout = {
  md: 24,
  lg: 12,
  xxl: 8,
};
</script>

<style lang='less' scoped>
</style>
