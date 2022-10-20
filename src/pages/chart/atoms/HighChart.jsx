import React from 'react'
import styled from 'styled-components';
import HighChartBar from './HighChartBar';
import HighChartSpline from './HighChartSpline';
import HighChartPie from './HighChartPie';
import HighChartScatter from './HighChartScatter';

const HighChart = () => {


  return (
    <>
      <Wrap>
        <HighChartBar />
        <HighChartPie />
      </Wrap>
      <Wrap>
        <HighChartSpline />
        <HighChartScatter />
      </Wrap>
    </>
  )
}

const Wrap = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export default HighChart