import React from 'react'
import { Todo } from '../App'

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<Todo[]>
}

const TodoList = ({ todos, setTodos }: Props): JSX.Element => {
  const toggleTodo = (toggleId: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === toggleId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li
            className={todo.completed ? 'done' : undefined}
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoList
