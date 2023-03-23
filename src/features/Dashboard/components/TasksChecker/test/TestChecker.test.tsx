import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TasksChecker from '../TasksChecker'
import { ThemeProvider } from 'styled-components'
import theme from '@styles/theme'
import { tasksListMock } from './constants'

const setSum = () => {}
const setTasksList = () => {}

describe('TasksChecker', () => {
  it('renders the task groups', () => {
    render(
      <ThemeProvider theme={theme}>
        <TasksChecker
          tasksList={tasksListMock}
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
          tasksList={tasksListMock}
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

  it('shows and hides the task list on click', () => {
    const { getByText, queryByText } = render(
      <ThemeProvider theme={theme}>
        <TasksChecker
          tasksList={tasksListMock}
          setSum={setSum}
          setTasksList={setTasksList}
        />
      </ThemeProvider>
    )
    fireEvent.click(getByText('General Info'))
    expect(getByText('Add name and surname')).toBeInTheDocument()
    expect(getByText('Add email')).toBeInTheDocument()
    fireEvent.click(getByText('General Info'))
    expect(queryByText('Add name and surname')).toBeNull()
    expect(queryByText('Add email')).toBeNull()
  })

  it('updates the checkbox state when clicked', () => {
    const { getByText, getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <TasksChecker
          tasksList={tasksListMock}
          setSum={setSum}
          setTasksList={setTasksList}
        />
      </ThemeProvider>
    )
    fireEvent.click(getByText('General Info'))
    fireEvent.click(getByLabelText('Add name and surname'))
    fireEvent.click(getByLabelText('Provide websites page url'))
    expect(
      (getByLabelText('Add name and surname') as HTMLInputElement).checked
    ).toBe(true)
    expect(
      (getByLabelText('Provide websites page url') as HTMLInputElement).checked
    ).toBe(true)
  })

  it('updates the total sum when checkboxes are clicked', () => {
    const setSumMock = jest.fn()
    const setTasksListMock = jest.fn()
    const { getByText, getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <TasksChecker
          tasksList={tasksListMock}
          setSum={setSumMock}
          setTasksList={setTasksListMock}
        />
      </ThemeProvider>
    )
    fireEvent.click(getByText('General Info'))

    fireEvent.click(getByLabelText('Add email'))
    fireEvent.click(getByLabelText('Add linkedin profile'))
    expect(setSumMock).toHaveBeenCalledTimes(2)
  })
})
