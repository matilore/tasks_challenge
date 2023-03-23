import styled from 'styled-components'

export const TasksWrapper = styled.div`
  width: 600px;
  hieght: 400px;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_GREY};
  border-radius: 8px;
  padding: 16px;
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZES.EXTRA_LARGE};
`
