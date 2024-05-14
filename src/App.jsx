import { TaskList } from './components/taskList'
import { TaskProvider } from './context/TaskContext'

function App() {
  return (
    <TaskProvider>
      <h1>TODO LIST</h1>
      <TaskList />
    </TaskProvider>
  )
}

export default App
