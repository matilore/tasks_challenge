import axios from 'axios'
interface TasksGroup {
  name: string
  tasks: Task[]
}

interface Task {
  description: string
  value: number
  checked: boolean
}

const getSum = (tasks: TasksGroup[]): number => {
  const tasksToParse = [...tasks]
  return tasksToParse.reduce((acc, el) => {
    if (el.tasks) {
      el.tasks.forEach(({ value }) => (acc += value))
    }
    return acc
  }, 0)
}

const parseResponse = (tasks: TasksGroup[]) => {
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

export const getTasks = async () => {
  const url =
    'https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress'
  const { data } = await axios.get(url)
  const parsedResponse = parseResponse(data)

  return parsedResponse
}
