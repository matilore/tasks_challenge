import React from 'react'
import styled from 'styled-components'
import Dashboard from '@features/Dashboard'

const GloablWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const App = () => {
  return (
    <GloablWrapper>
      <Dashboard />
    </GloablWrapper>
  )
}

export default App
