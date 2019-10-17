const salesChart = () => {
  const chartBlock = document.querySelector('.sales-chart');
  const chartBlocks = document.querySelectorAll('.sales-chart');
  const option = {
    baseOption: {
      color: ['#2196f3', '#505464'],
      grid: {
        left: '5%',
        right: '5%',
        width: 'auto',
        height: 'auto',
      },
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'none',
        },
      },
      xAxis: {
        type: 'category',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          inside: false,
          color: '#9ca1b2',
          margin: 10,
        },
      },
      yAxis: {
        type: 'value',
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#505464',
          },
        },
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130, 140, 120, 130, 100, 70],
          type: 'bar',
          barWidth: '60%',
          itemStyle: {
            normal: {
              color: '#505464',
            },
            emphasis: {
              color: '#2196f3',
            },
          },
        },
      ],
    },
    media: [
      {
        option: {
          grid: {
            top: '23%',
            bottom: '15%',
          },
        },
        xAxis: {
          axisLabel: {
            fontSize: 16,
          },
        },
      },
      {
        query: {
          maxWidth: 728,
        },
        option: {
          grid: {
            top: '30%',
            bottom: '10%',
          },
          xAxis: {
            axisLabel: {
              fontSize: 12,
            },
          },
        },
      },
    ],
  };

  const init = () => {
    if (!chartBlocks.length) return false;

    const salesEchart = echarts.init(chartBlock);

    salesEchart.setOption(option);

    window.addEventListener('resize', () => salesEchart.resize());

    return true;
  };

  return {
    init,
  };
};

export default salesChart();
