import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CheckboxGroup from '../CheckboxGroup'
import { ThemeProvider } from 'styled-components'
import theme from '@styles/theme'
describe('CheckboxGroup', () => {
  it('calls onCheckboxChange correctly when a checkbox is clicked', () => {
    const options = [
      { description: 'Option 1', checked: false, value: 10 },
      { description: 'Option 2', checked: true, value: 10 },
      { description: 'Option 3', checked: false, value: 10 }
    ]
    const onCheckboxChange = jest.fn()
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <CheckboxGroup options={options} onCheckboxChange={onCheckboxChange} />
      </ThemeProvider>
    )
    const option1Checkbox = getByLabelText('Option 1')
    fireEvent.click(option1Checkbox)
    expect(onCheckboxChange).toHaveBeenCalledTimes(1)
  })
})
