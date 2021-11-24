import { useState } from 'react'
import TodoList from './components/TodoList'
import { Input } from './components/Input'

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export type InitialState = Todo[]

const initialState = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
]

const App = () => {
  const [todos, setTodos] = useState(initialState)

  return (
    <div className='App'>
      <TodoList todos={todos} setTodos={setTodos} />
      <Input todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
