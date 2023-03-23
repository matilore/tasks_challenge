import React, { useState, useRef, useCallback, MouseEvent } from 'react'
import GroupIcon from '@assets/icons/TaskGroupIcon'
import GroupActionIcon from '@assets/icons/GroupActionIcon'
import CheckboxGroup from '@common/CheckboxGroup'
import {
  GroupedTasksWrapper,
  TaskGroupWrapper,
  TaskGroup,
  LabelWrapper,
  Action,
  ActionText,
  TasksList
} from './styledComponents'
import { listenOutsideClick } from './hooks'
import { TasksCheckerProps } from './contracts'
import { getNextTasksState } from './utils'

const TasksChecker = ({
  tasksList,
  setSum,
  setTasksList
}: TasksCheckerProps) => {
  const [selectedId, setSelectedId] = useState(0)
  const wrapperRef = useRef(null)
  listenOutsideClick(wrapperRef, () => setSelectedId(0))

  const handleCheckboxChange = useCallback(
    (groupIndex: number) => (index: number) => {
      const nextState = getNextTasksState(tasksList, groupIndex, index)
      setTasksList(nextState)
      setSum((sum: number) =>
        nextState[groupIndex].tasks[index].checked
          ? sum + nextState[groupIndex].tasks[index].value
          : sum - nextState[groupIndex].tasks[index].value
      )
    },
    [tasksList]
  )

  const handleSelectedTaskGroup = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const tasksGroupId = event.currentTarget.getAttribute('data-id')
      const clickedId = Number(tasksGroupId)
      const idToSelect = selectedId !== clickedId ? clickedId : 0
      setSelectedId(idToSelect)
    },
    [selectedId]
  )

  return (
    <GroupedTasksWrapper ref={wrapperRef}>
      {tasksList.map(({ id, name, tasks }, index) => {
        const isAllChecked = tasks.every(task => !!task.checked)
        const isSelected = selectedId === id
        return (
          <TaskGroupWrapper key={id}>
            <TaskGroup onClick={handleSelectedTaskGroup} data-id={id}>
              <LabelWrapper isAllChecked={isAllChecked}>
                <GroupIcon
                  isAllChecked={isAllChecked}
                  style={{ marginRight: '16px' }}
                />
                {name}
              </LabelWrapper>
              <Action>
                <ActionText>{isSelected ? 'Hide' : 'Show'}</ActionText>
                <GroupActionIcon
                  selected={isSelected}
                  style={{ marginLeft: '16px' }}
                />
              </Action>
            </TaskGroup>
            {isSelected && (
              <TasksList>
                <CheckboxGroup
                  options={tasks}
                  onCheckboxChange={handleCheckboxChange(index)}
                />
              </TasksList>
            )}
          </TaskGroupWrapper>
        )
      })}
    </GroupedTasksWrapper>
  )
}

export default TasksChecker
