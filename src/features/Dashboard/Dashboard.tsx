import React, { useEffect, useState } from 'react'
import ProgressBar from '@common/ProgressBar'
import TasksChecker from '@features/TasksChecker'
import { getTasks } from '@features/TasksChecker/datamodel/api'
import { TasksWrapper, Title } from './styledComponents'
import { TasksGroup } from './contracts'
import { TITLE } from './constants'

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
      <Title>{TITLE}</Title>
      <ProgressBar value={sum} />
      <TasksChecker
        tasksList={tasksList}
        setSum={setSum}
        setTasksList={setTasksList}
      />
    </TasksWrapper>
  )
}

export default Dashboard
