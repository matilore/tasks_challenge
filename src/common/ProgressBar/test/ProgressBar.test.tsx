import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ThemeProvider } from 'styled-components'
import theme from '@styles/theme'
import ProgressBar from '../ProgressBar'

describe('ProgressBar component', () => {
  it('waits for transition to complete', () => {
    const progressBar = render(
      <ThemeProvider theme={theme}>
        <ProgressBar value={70} />
      </ThemeProvider>
    )
    const progressBarContent = progressBar.getByTestId('progress-bar-content')
    expect(progressBarContent).toHaveStyle({ width: '70%' })
  })

  it('renders progress text correctly', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ProgressBar value={50} />
      </ThemeProvider>
    )

    const progressBarContent = getByTestId('progress-bar-content')
    expect(progressBarContent).toHaveStyle({ width: '50%' })
    expect(getByText('50%')).toBeInTheDocument()
  })
})
