import styled from 'styled-components'

export const TasksWrapper = styled.div`
  width: 600px;
  hieght: 400px;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_GREY};
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZES.EXTRA_LARGE};
`
export const HeaderWrapper = styled.div`
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
`
