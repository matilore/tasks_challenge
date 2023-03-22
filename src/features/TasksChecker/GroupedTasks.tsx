import React, { useState, useRef } from 'react'
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

interface TasksGroup {
  id: number
  name: string
  tasks: Task[]
}

interface Task {
  description: string
  value: number
  checked: boolean
}

const GroupedTasks = ({
  tasksList,
  setSum
}: {
  tasksList: TasksGroup[]
  setSum: (callback: (prevSum: number) => number) => void
}) => {
  const [selectedId, setSelectedId] = useState(0)

  const wrapperRef = useRef(null)
  listenOutsideClick(wrapperRef, () => setSelectedId(0))

  const handleSelectedTaskGroup = (event: React.MouseEvent<HTMLElement>) => {
    const tasksGroupId = event.currentTarget.getAttribute('data-id')
    const clickedId = Number(tasksGroupId)
    const idToSelect = selectedId !== clickedId ? clickedId : 0
    setSelectedId(idToSelect)
  }

  return (
    <GroupedTasksWrapper ref={wrapperRef}>
      {tasksList.map(({ id, name, tasks }) => {
        const isSelected = selectedId === id
        return (
          <TaskGroupWrapper key={id}>
            <TaskGroup onClick={handleSelectedTaskGroup} data-id={id}>
              <LabelWrapper>
                <GroupIcon style={{ marginRight: '16px' }} />
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
                <CheckboxGroup options={tasks} onChange={setSum} />
              </TasksList>
            )}
          </TaskGroupWrapper>
        )
      })}
    </GroupedTasksWrapper>
  )
}

export default GroupedTasks
