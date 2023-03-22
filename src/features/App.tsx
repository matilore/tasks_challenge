import React from 'react'
import styled from 'styled-components'
import Dashboard from '@features/Dashboard'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const App = () => {
  return (
    <Wrapper>
      <Dashboard />
    </Wrapper>
  )
}

export default App
