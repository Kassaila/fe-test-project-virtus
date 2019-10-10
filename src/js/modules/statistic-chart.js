const statisticChart = () => {
  const chartBlock = document.querySelector('.statistic-chart');

  const init = () => {
    const option = {
      tooltip: {
        trigger: 'none',
      },

      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        boundaryGap: false,
        show: false,
      },
      series: [
        {
          name: 'VALUE',
          type: 'line',
          smooth: true,
          data: [50, 45, 10, 45, 40, 20, 35],
          lineStyle: {
            color: '#2196f3',
            width: 4,
          },
          itemStyle: {
            color: '#fff',
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#2196f3',
                },
                {
                  offset: 1,
                  color: 'transparent',
                },
              ]),
            },
          },
        },
      ],
    };

    echarts.init(chartBlock, null, { renderer: 'svg' }).setOption(option);
  };

  return {
    init,
  };
};

export default statisticChart();
