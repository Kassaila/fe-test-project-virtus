const statisticChart = () => {
  const chartBlock = document.querySelector('.statistic-chart');
  const chartBlocks = document.querySelectorAll('.statistic-chart');
  const dataArr = [
    ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
    [1200, 603, 593],
    [3455, 3453, 492],
    [533, 4432, 2345],
    [3455, 5546, 234],
    [3453, 2342, 3245],
    [435, 3242, 345],
    [345, 3424, 2345],
  ];
  const dataSum = [];

  (() => {
    for (let i = 1; i < dataArr.length; i += 1) {
      dataSum.push(dataArr[i].reduce((acum, el) => acum + el));
    }
    return dataSum;
  })();

  const option = {
    baseOption: {
      calculable: true,
      color: ['#2196f3', '#505464'],
      grid: {
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '60%',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'none',
        },
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 70,
        },
      ],
      xAxis: {
        type: 'category',
        data: dataArr[0],
        splitLine: {
          show: true,
          lineStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 1,
                color: '#9ea3b4',
              },
              {
                offset: 0,
                color: 'rgba(158, 163, 180, 0.1)',
              },
            ]),
          },
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          inside: true,
          color: '#fff',
        },
      },
      yAxis: {
        type: 'value',
        show: false,
        min: 0,
        max: Math.max(dataSum),
      },
      series: [
        {
          name: 'SUM',
          id: 'SUM',
          type: 'line',
          smooth: true,
          data: dataSum,
          lineStyle: {
            color: '#2196f3',
            width: 4,
          },
          symbolSize: 12,
          itemStyle: {
            color: '#fff',
            borderWidth: 4,
            borderColor: '#2196f3',
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
                  color: 'rgba(33, 150, 243, 0.1)',
                },
              ]),
            },
          },
        },
        {
          name: 'VIEWS',
          id: 'VIEWS',
          type: 'pie',
          avoidLabelOverlap: false,
          hoverOffset: 0,
          labelLine: {
            show: false,
          },
          label: {
            position: 'center',
            rich: {
              d: {
                color: '#2196f3',
              },
              c: {
                fontWeight: 700,
                color: '#fff',
              },
              a: {
                color: '#9ca1b2',
              },
            },
          },
          data: [
            {
              value: 0,
              name: 'percent',
            },
            {
              value: 0,
              name: 'empty',
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          ],
        },
        {
          name: 'VISITORS',
          id: 'VISITORS',
          type: 'pie',
          avoidLabelOverlap: false,
          hoverOffset: 0,
          labelLine: {
            show: false,
          },
          label: {
            position: 'center',
            rich: {
              d: {
                color: '#2196f3',
              },
              c: {
                fontWeight: 700,
                color: '#fff',
              },
              a: {
                color: '#9ca1b2',
              },
            },
          },
          data: [
            {
              value: 0,
              name: 'percent',
            },
            {
              value: 0,
              name: 'empty',
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          ],
        },
        {
          name: 'IMPRESSIONS',
          id: 'IMPRESSIONS',
          type: 'pie',
          avoidLabelOverlap: false,
          hoverOffset: 0,
          labelLine: {
            show: false,
          },
          label: {
            position: 'center',
            rich: {
              d: {
                color: '#2196f3',
              },
              c: {
                fontWeight: 700,
                color: '#fff',
              },
              a: {
                color: '#9ca1b2',
              },
            },
          },
          data: [
            {
              value: 0,
              name: 'percent',
            },
            {
              value: 0,
              name: 'empty',
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          ],
        },
      ],
    },
    media: [
      // default
      {
        option: {
          xAxis: {
            axisLabel: {
              fontSize: 16,
              margin: 20,
            },
          },
          series: [
            {
              name: 'VIEWS',
              radius: [45, 40],
              center: [80, 80],
              label: {
                formatter: '{c|{c}}\n {d|{d}%} \n {a|{a}}',
                rich: {
                  d: {
                    fontSize: 22,
                    padding: [0, 0, -5, 0],
                  },
                  c: {
                    fontSize: 22,
                    padding: [0, 0, 0, 160],
                  },
                  a: {
                    fontSize: 16,
                    padding: [0, 0, 0, 160],
                  },
                },
              },
            },
            {
              name: 'VISITORS',
              radius: [45, 40],
              center: [330, 80],
              label: {
                formatter: '{c|{c}}\n {d|{d}%} \n {a|{a}}',
                rich: {
                  d: {
                    fontSize: 22,
                    padding: [0, 0, -5, 0],
                  },
                  c: {
                    fontSize: 22,
                    padding: [0, 0, 0, 160],
                  },
                  a: {
                    fontSize: 16,
                    padding: [0, 0, 0, 180],
                  },
                },
              },
            },
            {
              name: 'IMPRESSIONS',
              radius: [45, 40],
              center: [560, 80],
              label: {
                formatter: '{c|{c}}\n {d|{d}%} \n {a|{a}}',
                rich: {
                  d: {
                    fontSize: 22,
                    padding: [0, 0, -5, 0],
                  },
                  c: {
                    fontSize: 22,
                    padding: [0, 0, 0, 160],
                  },
                  a: {
                    fontSize: 16,
                    padding: [0, 0, 0, 220],
                  },
                },
              },
            },
          ],
        },
      },
      {
        query: {
          maxWidth: 728,
        },
        option: {
          xAxis: {
            axisLabel: {
              fontSize: 12,
              margin: 10,
            },
          },
          series: [
            {
              name: 'VIEWS',
              radius: [30, 25],
              center: ['20%', 50],
              label: {
                formatter: '{d|{d}%}\n {c|{c}}\n {a|{a}}',
                rich: {
                  d: {
                    fontSize: 16,
                    padding: [-145, 0, -5, 0],
                  },
                  c: {
                    fontSize: 16,
                    padding: [0, 0, 110, 0],
                  },
                  a: {
                    fontSize: 10,
                    padding: [0, 0, 5, 0],
                  },
                },
              },
            },
            {
              name: 'VISITORS',
              radius: [30, 25],
              center: ['50%', 50],
              label: {
                formatter: '{d|{d}%}\n {c|{c}}\n {a|{a}}',
                rich: {
                  d: {
                    fontSize: 16,
                    padding: [-145, 0, -5, 0],
                  },
                  c: {
                    fontSize: 16,
                    padding: [0, 0, 110, 0],
                  },
                  a: {
                    fontSize: 10,
                    padding: [0, 0, 5, 0],
                  },
                },
              },
            },
            {
              name: 'IMPRESSIONS',
              radius: [30, 25],
              center: ['80%', 50],
              label: {
                formatter: '{d|{d}%}\n {c|{c}}\n {a|{a}}',
                rich: {
                  d: {
                    fontSize: 16,
                    padding: [-145, 0, -5, 0],
                  },
                  c: {
                    fontSize: 16,
                    padding: [0, 0, 110, 0],
                  },
                  a: {
                    fontSize: 10,
                    padding: [0, 0, 5, 0],
                  },
                },
              },
            },
          ],
        },
      },
    ],
  };

  const init = () => {
    if (!chartBlocks.length) return false;

    const statEchart = echarts.init(chartBlock);
    let currentDay;

    statEchart.setOption(option);

    window.addEventListener('resize', () => statEchart.resize());

    statEchart.on('updateAxisPointer', (event) => {
      const xAxisInfo = event.axesInfo[0];
      if (xAxisInfo && currentDay !== xAxisInfo.value + 1) {
        currentDay = xAxisInfo.value + 1;
        statEchart.setOption({
          series: [
            {
              id: 'VIEWS',
              data: [
                {
                  value: dataArr[currentDay][0],
                },
                {
                  value: dataSum[currentDay - 1],
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                },
              ],
            },
            {
              id: 'VISITORS',
              data: [
                {
                  value: dataArr[currentDay][1],
                },
                {
                  value: dataSum[currentDay - 1],
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                },
              ],
            },
            {
              id: 'IMPRESSIONS',
              data: [
                {
                  value: dataArr[currentDay][2],
                },
                {
                  value: dataSum[currentDay - 1],
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                },
              ],
            },
          ],
        });
      }
    });

    return true;
  };

  return {
    init,
  };
};

export default statisticChart();
