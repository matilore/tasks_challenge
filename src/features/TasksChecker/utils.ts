import produce from 'immer'
import { TasksGroup } from './contracts'

export const getNextTasksState = (
  tasksList: TasksGroup[],
  groupIndex: number,
  index: number
) => {
  return produce(tasksList, draftState => {
    draftState[groupIndex].tasks[index].checked =
      !draftState[groupIndex].tasks[index].checked
  })
}
