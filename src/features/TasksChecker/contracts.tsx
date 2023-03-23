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

export interface TasksCheckerProps {
  tasksList: TasksGroup[]
  setSum: (callback: (prevSum: number) => number) => void
}
