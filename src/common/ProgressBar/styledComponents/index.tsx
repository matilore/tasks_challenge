import styled from 'styled-components'
import { PorgressBarContentProps } from './contracts'

export const PorgressBarWrapper = styled.div`
  width: 100%;
  height: 20px;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_GREEN};
  border-radius: 10px;
  position: relative;
  margin: 16px 0;
`

export const PorgressBarContent = styled.div<PorgressBarContentProps>`
  width: ${({ progress }) => {
    return progress
  }}%;
  height: 100%;
  transition: width 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;

  > span {
    position: absolute;
    right: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`
