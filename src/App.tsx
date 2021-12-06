import { useEffect, useState } from 'react'
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

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => setTodos(json.filter((_todo: Todo, index: number) => index < 10 )))
  }, [])

  const handleTodoClick = (e: React.SyntheticEvent, todoId: number) => {
    const el = e.target as HTMLElement
    const clickedOnTheRemoveBtn = !!el.closest('.remove-todo')
    const action = clickedOnTheRemoveBtn ? removeTodo:toggleTodo
    action(todoId)
    
    function toggleTodo(todoId: number){
      const updatedTodos = todos.map((todo) => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed
        }
        return todo
      })
      setTodos(updatedTodos)
    }

    function removeTodo(todoId: number){
      console.log(todoId)
      const updatedTodos = todos.filter((todo) => todo.id !== todoId)
      setTodos(updatedTodos)
    }
  }

  return (
    <div className='App'>
      <TodoList todos={todos} handleTodoClick={handleTodoClick} />
      <Input todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
