import React, { useEffect, useState } from 'react'
import ProgressBar from '@common/ProgressBar'
import TasksChecker from '@features/Dashboard/components/TasksChecker'
import { getTasks } from '@features/Dashboard/components/TasksChecker/datamodel/api'
import { TasksWrapper, Title } from './styledComponents'
import { TasksGroup } from './contracts'
import { TITLE } from './constants'

const Dashboard = () => {
  const [tasksList, setTasksList] = useState<TasksGroup[]>([])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    getTasks().then(({ normalizedSum, data }) => {
      setProgress(normalizedSum)
      setTasksList(data)
    })
  }, [])
  return (
    <TasksWrapper>
      <Title>{TITLE}</Title>
      <ProgressBar value={progress} />
      <TasksChecker
        tasksList={tasksList}
        setProgress={setProgress}
        setTasksList={setTasksList}
      />
    </TasksWrapper>
  )
}

export default Dashboard
