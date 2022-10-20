import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import styled from 'styled-components';

const HighChartPie = () => {
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Browser market shares in May, 2020'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'Chrome',
        y: 70.67,
        sliced: true,
        selected: true
      }, {
        name: 'Edge',
        y: 14.77
      }, {
        name: 'Firefox',
        y: 4.86
      }, {
        name: 'Safari',
        y: 2.63
      }, {
        name: 'Internet Explorer',
        y: 1.53
      }, {
        name: 'Opera',
        y: 1.40
      }, {
        name: 'Sogou Explorer',
        y: 0.84
      }, {
        name: 'QQ',
        y: 0.51
      }, {
        name: 'Other',
        y: 2.6
      }]
    }]
  };

  return (
    <Wrap>
      <HighchartsReact className='chart' highcharts={Highcharts} options={options} ></HighchartsReact>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 50%;
  height: 450px;
  border: 1px solid #6267C4;
`

export default HighChartPie