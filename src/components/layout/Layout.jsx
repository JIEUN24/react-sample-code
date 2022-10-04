import React from 'react'
import styled from 'styled-components'

const Layout = (props) => {
  return (
    <Wrap>{props.children}</Wrap>
  )
}

const Wrap = styled.div`
  max-width: 1200px;
  min-width: 800px;
  background-color: aliceblue;
  margin: 0 auto;
`

export default Layout