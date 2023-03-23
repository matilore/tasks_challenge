import { getSum, parseResponse } from './utils'

describe('getSum', () => {
  it('returns the correct progress of task values', () => {
    const tasks = [
      {
        name: 'Group 1',
        tasks: [{ description: 'lorem ipsum', value: 10, checked: true }]
      },
      {
        name: 'Group 2',
        tasks: [{ description: 'lorem ipsum', value: 30, checked: true }]
      }
    ]
    const result = getSum(tasks)
    expect(result).toEqual(40)
  })
})

describe('parseResponse', () => {
  it('correctly parses the response data', () => {
    const tasks = [
      {
        name: 'Group 1',
        tasks: [
          { description: 'Task 1', value: 10, checked: true },
          { description: 'Task 2', value: 20, checked: false },
          { description: 'Task 3', value: 30, checked: true }
        ]
      },
      {
        name: 'Group 2',
        tasks: [
          { description: 'Task 4', value: 15, checked: false },
          { description: 'Task 5', value: 25, checked: true }
        ]
      }
    ]
    const result = parseResponse(tasks)
    expect(result).toMatchSnapshot()
  })
})
