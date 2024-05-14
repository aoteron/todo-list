import { createContext, useContext, useState } from 'react'

const TaskContext = createContext()

export function useTasks() {
  return useContext(TaskContext)
}

export function TaskProvider(taskProviderProps) {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', isFinished: false },
    { id: 2, title: 'Task 2', isFinished: false },
    { id: 3, title: 'Task 3', isFinished: false },
    { id: 4, title: 'Task 4', isFinished: false },
    { id: 5, title: 'Task 5', isFinished: false }
  ])

  const handleComplete = (selectedTaskId) => {
    const newState = []
    tasks.forEach((task) => {
      if (task.id === selectedTaskId) {
        task.isFinished = !task.isFinished
      }
      newState.push(task)
    })
    setTasks(newState)
  }

  return (
    <TaskContext.Provider value={{ tasks, setTasks, handleComplete }}>
      {taskProviderProps.children}
    </TaskContext.Provider>
  )
}
