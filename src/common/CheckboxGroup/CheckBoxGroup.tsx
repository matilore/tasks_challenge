import React, { useState } from 'react'
import {
  CheckboxWrapper,
  HiddenCheckbox,
  CheckboxIcon,
  CheckmarkIcon,
  CheckboxLabel
} from './styledComponents'

interface CheckboxGroupProps {
  options: {
    description: string
    value: number
    checked: boolean
  }[]
  onChange: (callback: (prevSum: number) => number) => void
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options, onChange }) => {
  const [tasks, setTasks] = useState(options)
  const handleCheckboxChange = (index: number) => {
    const newOptions = [...options]
    newOptions[index].checked = !newOptions[index].checked

    onChange((sum: number) => {
      if (newOptions[index].checked) {
        return sum + newOptions[index].value
      } else {
        return sum - newOptions[index].value
      }
    })
    setTasks(newOptions)
  }
  return (
    <>
      {tasks.map((option, index) => (
        <CheckboxWrapper
          key={index}
          onClick={() => handleCheckboxChange(index)}
        >
          <HiddenCheckbox checked={option.checked} />
          <CheckboxIcon checked={option.checked}>
            {option.checked && (
              <CheckmarkIcon d="M6.49574 10.1007L3.888 7.30201L3 8.24832L6.49574 12L13 4.94631L12.1182 4L6.49574 10.1007Z" />
            )}
          </CheckboxIcon>
          <CheckboxLabel>{option.description}</CheckboxLabel>
        </CheckboxWrapper>
      ))}
    </>
  )
}

export default CheckboxGroup
