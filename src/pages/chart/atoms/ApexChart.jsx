import React from 'react'
import styled from 'styled-components';
import ApexChartLine from './ApexChartLine';
import ApexChartLineColum from './ApexChartLineColum';

const ApexChart = () => {
  return (
    <>
      <Wrap>
        <ApexChartLine />
        <ApexChartLineColum />
      </Wrap>
      <Wrap>
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

export default ApexChart