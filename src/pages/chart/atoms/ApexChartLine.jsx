import React from 'react'
import styled from 'styled-components'
import ReactApexChart from 'react-apexcharts'

const ApexChartLine = () => {
  const data = {
    series: [{
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
          'United States', 'China', 'Germany'
        ],
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

export default ApexChartLine