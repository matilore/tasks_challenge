export interface TasksGroup {
  id: number
  name: string
  tasks: Task[]
}

export interface Task {
  description: string
  value: number
  checked: boolean
}
