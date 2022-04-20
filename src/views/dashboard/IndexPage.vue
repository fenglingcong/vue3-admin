<template>
  <a-button type="primary" @click="update">更新</a-button>
  <div class="app-inner" id="container"></div>
</template>

<script>
import DataSet from '@antv/data-set';
import { Chart } from '@antv/g2';

export default {
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    const data = [
      {
        item: 'Design',
        a: 70,
        b: 30,
        d: 30,
      },
      {
        item: 'Development',
        a: 60,
        b: 70,
        d: 50,
      },
      {
        item: 'Marketing',
        a: 50,
        b: 60,
        d: 60,
      },
      { item: 'Users', a: 40, b: 50 },
      { item: 'Test', a: 60, b: 70 },
      { item: 'Language', a: 70, b: 50 },
      { item: 'Technology', a: 50, b: 40 },
      { item: 'Support', a: 30, b: 40 },
      { item: 'Sales', a: 60, b: 40 },
      { item: 'UX', a: 50, b: 60 },
    ];
    this.render(data);
  },
  methods: {
    render(data) {
      const { DataView } = DataSet;
      const dv = new DataView().source(data);
      dv.transform({
        type: 'fold',
        fields: ['a', 'b', 'c', 'd', 'e'], // 展开字段集
        key: 'user', // key字段
        value: 'score', // value字段
      });

      const chart = new Chart({
        container: 'container',
        autoFit: true,
        height: 500,
      });
      chart.data(dv.rows);
      chart.scale('score', {
        min: 0,
        max: 80,
      });
      chart.coordinate('polar', {
        radius: 0.8,
      });
      chart.tooltip({
        shared: true,
        showCrosshairs: true,
        crosshairs: {
          line: {
            style: {
              lineDash: [4, 4],
              stroke: '#333',
            },
          },
        },
      });
      chart.axis('item', {
        line: null,
        tickLine: null,
        grid: {
          line: {
            style: {
              lineDash: null,
            },
          },
        },
      });
      chart.axis('score', {
        line: null,
        tickLine: null,
        grid: {
          line: {
            type: 'circle',
            style: {
              lineDash: null,
            },
          },
        },
      });

      chart.line().position('item*score').color('user').size(2);
      chart.point().position('item*score').color('user').shape('circle')
        .size(4)
        .style({
          stroke: '#fff',
          lineWidth: 1,
          fillOpacity: 1,
        });
      chart.area().position('item*score').color('user');

      this.$nextTick(() => {
        chart.render();
        this.chart = chart;
      });
    },
    update() {
      this.chart.clear();
      this.render([
        { item: 'Users', a: 40, b: 50 },
        { item: 'Test', a: 60, b: 70 },
        { item: 'Language', a: 70, b: 50 },
        { item: 'Technology', a: 50, b: 40 },
        { item: 'Support', a: 30, b: 40 },
        { item: 'Sales', a: 60, b: 40 },
        { item: 'UX', a: 50, b: 60 },
      ]);
    },
  },
};
</script>

<style lang="less" scoped></style>
