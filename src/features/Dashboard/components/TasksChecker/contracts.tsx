import { Dispatch } from 'react'
export interface TasksGroup {
  id: number
  name: string
  tasks: Task[]
}

interface Task {
  description: string
  value: number
  checked: boolean
}

export interface TasksCheckerProps {
  tasksList: TasksGroup[]
  setProgress: (callback: (prevSum: number) => number) => void
  setTasksList: Dispatch<TasksGroup[]>
}
