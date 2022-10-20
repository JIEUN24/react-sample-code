import React, { useEffect } from 'react'
import ApexChart from './atoms/ApexChart'
import ChartJs from './atoms/ChartJs'
import AmCharts from './atoms/AmCharts'
import HighChart from './atoms/HighChart'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'

const Index = () => {
  // useEffect(() => {
  //   axios.get('http://apis.data.go.kr/1360000/MidFcstInfoService')
  // }, [])

  const navigate = useNavigate();
  const params = useParams();
  const kind = params.kind;

  return (
    <div>
      <BtnBox>
        <button onClick={() => {
          navigate('/chart/highChart')
        }}>HighChart</button>
        <button onClick={() => {
          navigate('/chart/chartJs')
        }}>ChartJs</button>
        <button onClick={() => {
          navigate('/chart/apexChart')
        }}>ApexChart</button>
      </BtnBox>
      {kind === 'highChart' ?
        <HighChart />
        : kind === 'chartJs' ?
          <ChartJs />
          :
          kind === 'apexChart' ?
            <ApexChart />
            :
            null
      }
      {/* <ApexCharts /> */}
      {/* <AmCharts /> */}
    </div>
  )
}

const BtnBox = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Index