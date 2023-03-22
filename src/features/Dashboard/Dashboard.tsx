import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ProgressBar from '@common/ProgressBar'
import GroupedTasks from '@features/TasksChecker'
import { getTasks } from '@features/TasksChecker/datamodel/api'

const TasksWrapper = styled.div`
  width: 600px;
  hieght: 400px;
`

const Title = styled.h2``

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

const Dashboard = () => {
  const [tasksList, setTasksList] = useState<TasksGroup[]>([])
  const [sum, setSum] = useState(0)

  useEffect(() => {
    getTasks().then(({ normalizedSum, data }) => {
      setSum(normalizedSum)
      setTasksList(data)
    })
  }, [])
  return (
    <TasksWrapper>
      <Title>Lodgify Grouped Tasks</Title>
      <ProgressBar value={sum} />
      <GroupedTasks tasksList={tasksList} setSum={setSum} />
    </TasksWrapper>
  )
}

export default Dashboard
