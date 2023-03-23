import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TasksChecker from './TasksChecker'
import { ThemeProvider } from 'styled-components'
import theme from '@styles/theme'

const tasksList = [
  {
    id: 1,
    name: 'General Info',
    tasks: [
      {
        description: 'Add name and surname',
        value: 10,
        checked: true
      },
      {
        description: 'Add email',
        value: 15,
        checked: false
      },
      {
        description: 'Add linkedin profile',
        value: 8,
        checked: false
      },
      {
        description: 'Provide websites page url',
        value: 5,
        checked: true
      }
    ]
  },
  {
    id: 2,
    name: 'Accomiplishments',
    tasks: [
      {
        description: 'Wrote a small poem about the birthday',
        value: 23,
        checked: false
      },
      {
        description: 'Jump three times with one leg',
        value: 32,
        checked: true
      },
      {
        description: 'Avoid the annoying neighbor',
        value: 2,
        checked: false
      },
      {
        description: 'Say hello to a random person',
        value: 21,
        checked: false
      },
      {
        description: 'Fill the description in at least 3 places',
        value: 12,
        checked: true
      }
    ]
  },
  {
    id: 3,
    name: 'Personal retrospective',
    tasks: [
      {
        description: 'Remember a dream',
        value: 15,
        checked: true
      },
      {
        description: 'Have a crush',
        value: 7,
        checked: true
      }
    ]
  }
]
const setSum = () => {}
const setTasksList = () => {}
describe('TasksChecker', () => {
  it('renders the task groups', () => {
    render(
      <ThemeProvider theme={theme}>
        <TasksChecker
          tasksList={tasksList}
          setSum={setSum}
          setTasksList={setTasksList}
        />
      </ThemeProvider>
    )
    expect(screen.getByText('General Info')).toBeInTheDocument()
    expect(screen.getByText('Accomiplishments')).toBeInTheDocument()
  })

  it('selects and deselects a task group', () => {
    render(
      <ThemeProvider theme={theme}>
        <TasksChecker
          tasksList={tasksList}
          setSum={setSum}
          setTasksList={setTasksList}
        />
      </ThemeProvider>
    )
    const group1 = screen.getByText('General Info')
    const group2 = screen.getByText('Accomiplishments')

    fireEvent.click(group1)
    expect(screen.getByText('Add name and surname')).toBeInTheDocument()

    fireEvent.click(group2)
    expect(
      screen.getByText('Wrote a small poem about the birthday')
    ).toBeInTheDocument()

    fireEvent.click(group2)
    expect(screen.queryByText('Remember a dream')).not.toBeInTheDocument()
  })
})
