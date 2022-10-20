import React from 'react'
import styled from 'styled-components'
import ReactApexChart from 'react-apexcharts'

const ApexChartLineColum = () => {
  const data = {
    series: [{
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 5,
          columnWidth: '80%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
    },
  }
  return (
    <Wrap>
      <ReactApexChart width={500} height={300} options={data.options} series={data.series} type="bar" height={350} />
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 50%;
  /* height: 450px; */
  border: 1px solid #6267C4;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export default ApexChartLineColum