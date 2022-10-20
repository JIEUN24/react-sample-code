import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import styled from 'styled-components';

const HighChartBar = () => {
  const options = {
    chart: {
      type: "column"
    },
    title: {
      text: "My chart"
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6, 7, 9]
      }
    ]
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

export default HighChartBar