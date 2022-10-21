import React from 'react'
import Layout from '../../components/layout/Layout'
import Average from './atoms/Average'
import DateView from './atoms/DateView'

const Index = () => {
  return (
    <Layout>
      <Average />
      <DateView />
    </Layout>
  )
}

export default Index