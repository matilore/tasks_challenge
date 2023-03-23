import styled from 'styled-components'

export const GroupedTasksWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const TaskGroupWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  box-sizing: border-box;

  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_GREY};
  border-bottom: none;

  &:first-of-type {
    border-radius: 8px 8px 0 0;
  }

  &:last-of-type {
    border-radius: 0 0 8px 8px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_GREY};
  }
`

export const TaskGroup = styled.div`
  width: 100%;
  cursor: pointer;
  min-heigh: 68px;
  display: flex;
  justify-content: space-between;
`
interface LabelWrapperProps {
  isAllChecked: boolean
}

export const LabelWrapper = styled.div<LabelWrapperProps>`
  display: flex;
  align-items: center;
  color: ${({ isAllChecked, theme }) =>
    isAllChecked ? theme.COLORS.GREEN : 'inherit'};
`

export const Action = styled.div`
  display: flex;
  align-items: center;
`

export const ActionText = styled.span`
  color: ${({ theme }) => theme.COLORS.GREY};
`

export const TasksList = styled.div`
  margin-top: 56px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
`
