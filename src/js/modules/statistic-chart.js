const statisticChart = () => {
  const chartBlock = document.querySelector('.statistic-chart');
  const dataObj = [
    ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
    [1200, 603, 593],
    [3455, 3453, 492],
    [533, 54332, 2345],
    [3455, 5546, 234],
    [3453, 2342, 3245],
    [435, 3242, 345],
    [345, 3424, 2345],
  ];
  const init = () => {
    const option = {
      tooltip: {
        trigger: 'none',
      },
      color: ['#2196f3', '#505464'],
      grid: {
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '60%',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none',
          },
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
        data: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
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
          fontSize: 16,
          color: '#fff',
          margin: 20,
        },
      },
      yAxis: {
        type: 'value',
        show: false,
        min: 0,
        max: 80,
      },
      series: [
        {
          name: 'VALUE',
          type: 'line',
          smooth: true,
          data: [20, 30, 20, 25, 30, 20, 25],
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
          radius: [40, 35],
          center: [80, 80],
          avoidLabelOverlap: false,
          hoverOffset: 0,
          labelLine: {
            show: false,
          },
          label: {
            position: 'center',
            formatter: '{c|{c}}\n {d|{d}%} \n {a|{a}}',
            rich: {
              d: {
                fontSize: 22,
                color: '#fff',
                padding: [0, 0, -5, 0],
              },
              c: {
                fontSize: 22,
                fontWeight: 700,
                color: '#fff',
                padding: [0, 0, 0, 160],
              },
              a: {
                fontSize: 16,
                color: '#9ca1b2',
                padding: [0, 0, 0, 160],
              },
            },
          },
          data: [
            {
              value: 75,
              name: 'percent',
            },
            {
              value: 25,
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
          radius: [40, 35],
          center: [330, 80],
          avoidLabelOverlap: false,
          hoverOffset: 0,
          labelLine: {
            show: false,
          },
          label: {
            position: 'center',
            formatter: '{c|{c}}\n {d|{d}%} \n {a|{a}}',
            rich: {
              d: {
                fontSize: 22,
                color: '#fff',
                padding: [0, 0, -5, 0],
              },
              c: {
                fontSize: 22,
                fontWeight: 700,
                color: '#fff',
                padding: [0, 0, 0, 160],
              },
              a: {
                fontSize: 16,
                color: '#9ca1b2',
                padding: [0, 0, 0, 180],
              },
            },
          },
          data: [
            {
              value: 75,
              name: 'percent',
            },
            {
              value: 25,
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
          radius: [40, 35],
          center: [560, 80],
          avoidLabelOverlap: false,
          hoverOffset: 0,
          labelLine: {
            show: false,
          },
          label: {
            position: 'center',
            formatter: '{c|{c}}\n {d|{d}%} \n {a|{a}}',
            rich: {
              d: {
                fontSize: 22,
                color: '#fff',
                padding: [0, 0, -5, 0],
              },
              c: {
                fontSize: 22,
                fontWeight: 700,
                color: '#fff',
                padding: [0, 0, 0, 160],
              },
              a: {
                fontSize: 16,
                color: '#9ca1b2',
                padding: [0, 0, 0, 220],
              },
            },
          },
          data: [
            {
              value: 75,
              name: 'percent',
            },
            {
              value: 25,
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
    };

    const statEchart = echarts.init(chartBlock);

    statEchart.setOption(option);

    window.onresize = () => statEchart.resize();
    let currentDay;
    statEchart.on('updateAxisPointer', (event) => {
      const xAxisInfo = event.axesInfo[0];
      if (xAxisInfo && currentDay !== xAxisInfo.value+1) {
        currentDay = xAxisInfo.value + 1;
        console.log(currentDay, dataObj[currentDay]);
        statEchart.setOption({
          series: [{
              id: 'IMPRESSIONS',
              data: [{
                value: dataObj[currentDay][2]
              },{
                value: dataObj[currentDay][1],
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },],


          }]
      });

      }
    });
  };

  return {
    init,
  };
};

export default statisticChart();
