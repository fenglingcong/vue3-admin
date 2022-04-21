<template>
  <a-button type="primary" @click="update">{{ $t('action.update') }}</a-button>
  <div id="pie-container"></div>
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
      { name: '狮子', type: '火象星座', value: 11 },
      { name: '白羊', type: '火象星座', value: 10 },
      { name: '射手', type: '火象星座', value: 10 },
      { name: '水瓶', type: '风向星座', value: 14 },
      { name: '双子', type: '风向星座', value: 7 },
      { name: '天秤', type: '风向星座', value: 7 },
      { name: '摩羯', type: '土象星座', value: 14 },
      { name: '金牛', type: '土象星座', value: 3 },
      { name: '处女', type: '土象星座', value: 3 },
      { name: '天蝎', type: '水象星座', value: 11 },
      { name: '巨蟹', type: '水象星座', value: 5 },
      { name: '双鱼', type: '水象星座', value: 5 },
    ];
    this.initRender(data);
  },
  methods: {
    transformData(data, dimension = 'type') {
      const ds = new DataSet();
      const dv = ds.createView();
      dv.source(data).transform({
        type: 'percent',
        field: 'value',
        dimension,
        as: 'percent',
      });
      return dv.rows;
    },
    initRender(data) {
      const colorMap = {
        火象星座: '#1890ff',
        风向星座: '#13c2c2',
        土象星座: '#ff6666',
        水象星座: '#73d13d',
      };

      const chart = new Chart({
        container: 'pie-container',
        autoFit: true,
        height: 500,
      });
      chart.data(this.transformData(data));
      chart.legend(false);
      chart.coordinate('theta', {
        radius: 0.5,
        innerRadius: 0.3,
      });
      chart.tooltip({
        showMarkers: false,
      });
      chart
        .interval()
        .adjust('stack')
        .position('percent')
        .color('type', (val) => colorMap[val])
        .style({
          stroke: 'white',
          lineWidth: 1,
        })
        .label('type', {
          offset: -5,
          style: {
            fill: 'white',
            shadowBlur: 2,
            shadowColor: 'rgba(0, 0, 0, .45)',
          },
        });

      const outterView = chart.createView();
      outterView.data(this.transformData(data, 'name'));
      outterView.coordinate('theta', {
        innerRadius: 0.5 / 0.8,
        radius: 0.8,
      });
      outterView
        .interval()
        .adjust('stack')
        .position('percent')
        .color('type*name', (type) => colorMap[type])
        .style({
          stroke: 'white',
          lineWidth: 1,
        })
        .label('name', {
          offset: -10,
          style: {
            fill: 'white',
            shadowBlur: 2,
            shadowColor: 'rgba(0, 0, 0, .45)',
          },
        });

      chart.interaction('element-active');

      chart.render();
      this.chart = chart;
      this.outterView = outterView;
    },
    update() {
      const data = [
        { name: '狮子', type: '火象星座', value: 11 },
        { name: '白羊', type: '火象星座', value: 12 },
        { name: '射手', type: '火象星座', value: 13 },
        { name: '水瓶', type: '风向星座', value: 12 },
        { name: '双子', type: '风向星座', value: 12 },
        { name: '天秤', type: '风向星座', value: 6 },
        { name: '摩羯', type: '土象星座', value: 14 },
        { name: '金牛', type: '土象星座', value: 3 },
        { name: '处女', type: '土象星座', value: 3 },
        { name: '天蝎', type: '水象星座', value: 4 },
        { name: '巨蟹', type: '水象星座', value: 5 },
        { name: '双鱼', type: '水象星座', value: 5 },
      ];
      this.outterView.data(this.transformData(data, 'name'));
      this.chart.data(this.transformData(data));
      this.chart.render();
    },
    beforeMount() {
      this.chart = null;
    },
  },
};
</script>
