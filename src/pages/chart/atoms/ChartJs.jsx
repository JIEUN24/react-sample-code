import React from 'react'
import styled from 'styled-components';
import ChartJsBar from './ChartJsBar';
import ChartJsLine from './ChartJsLine';
import ChartJsPie from './ChartJsPie';


const ChartJs = () => {


  return (
    <>
      <Wrap>
        <ChartJsBar />
        <ChartJsPie />
      </Wrap>
      <Wrap>
        <ChartJsLine />
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

export default ChartJs