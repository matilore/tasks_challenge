import React from 'react'
import {
  CheckboxWrapper,
  HiddenCheckbox,
  CheckboxIcon,
  CheckmarkIcon,
  CheckboxLabel
} from './styledComponents'
import { CheckboxGroupProps } from './contracts'

const CheckboxGroup = ({ options, onCheckboxChange }: CheckboxGroupProps) => {
  const handleCheckboxChange = (index: number) => {
    onCheckboxChange(index)
  }
  return (
    <>
      {options.map((option, index) => (
        <CheckboxWrapper
          key={index}
          onClick={() => handleCheckboxChange(index)}
        >
          <HiddenCheckbox checked={option.checked} />
          <CheckboxIcon checked={option.checked}>
            {option.checked && <CheckmarkIcon />}
          </CheckboxIcon>
          <CheckboxLabel>{option.description}</CheckboxLabel>
        </CheckboxWrapper>
      ))}
    </>
  )
}

export default CheckboxGroup
