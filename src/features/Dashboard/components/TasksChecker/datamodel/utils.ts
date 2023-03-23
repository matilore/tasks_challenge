interface TasksGroup {
  name: string
  tasks: Task[]
}

interface Task {
  description: string
  value: number
  checked: boolean
}

export const getSum = (tasks: TasksGroup[]): number => {
  const tasksToParse = [...tasks]
  return tasksToParse.reduce((acc, el) => {
    if (el.tasks) {
      el.tasks.forEach(({ value }) => (acc += value))
    }
    return acc
  }, 0)
}

export const parseResponse = (tasks: TasksGroup[]) => {
  const sum = getSum(tasks)
  let normalizedSum = 0
  const parsedData = tasks.map(({ name, tasks }, index) => {
    const parsedTasks = tasks.map(({ value, ...task }) => {
      const normalizedValue = Math.round((value * 100) / sum)
      normalizedSum += task.checked ? normalizedValue : 0
      return {
        ...task,
        value: normalizedValue
      }
    })
    return { id: index + 1, name, tasks: parsedTasks }
  })
  return { data: parsedData, normalizedSum }
}
