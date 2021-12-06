import React from 'react'
import { Todo } from '../App'

interface Props {
  todos: Todo[]
  handleTodoClick: (e: React.SyntheticEvent, id: number) => void
}

const TodoList = ({ todos, handleTodoClick }: Props): JSX.Element => {

  return (
    <>
      <ol>
        {todos.map((todo) => (
          <li
            className={todo.completed ? 'done' : undefined}
            key={todo.id}
            onClick={(e) => handleTodoClick(e, todo.id)}
          >
            {todo.title}
            <span className="remove-todo" >
              X
            </span>
          </li>
        ))}
      </ol>
    </>
  )
}

export default TodoList
