import { useRef } from 'react'
import { Todo } from '../App'

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<Todo[]>
}

export const Input = ({ todos, setTodos }: Props): JSX.Element => {
  const todoNameRef = useRef<HTMLInputElement | null>(null)

  function handleAddTodo() {
    const inputTodo = todoNameRef.current?.value.trim()
    if (inputTodo === '') return
    const idArray = todos.map((todo) => todo.id)
    const nextId =
      idArray.reduce((previousValue, currentValue) =>
        Math.max(previousValue, currentValue)
      ) + 1
    const newTodo = {
      userId: 1,
      id: nextId,
      title: inputTodo,
      completed: false,
    } as Todo
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <>
      <input ref={todoNameRef} type='text' />
      <button onClick={handleAddTodo}>+</button>
    </>
  )
}
