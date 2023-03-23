import styled from 'styled-components'
import { CheckboxProps } from './contracts'

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`

export const CheckmarkIcon = styled.path.attrs({
  d: 'M6.49574 10.1007L3.888 7.30201L3 8.24832L6.49574 12L13 4.94631L12.1182 4L6.49574 10.1007Z'
})`
  fill: #fff;
`

export const CheckboxIcon = styled.svg<CheckboxProps>`
  width: 16px;
  height: 16px;
  fill: ${({ checked, theme }) => (checked ? theme.COLORS.WHITE : 'none')};
  stroke-width: 1.5;
  border-radius: 4px;
  border: 1px solid
    ${({ checked, theme }) => (checked ? 'none' : theme.COLORS.LIGHT_GREY)};
  background-color: ${({ checked, theme }) =>
    checked ? theme.COLORS.GREEN : 'none'};
  box-sizing: border-box;
`

export const CheckboxLabel = styled.label`
  margin-left: 16px;
  cursor: pointer;
`
