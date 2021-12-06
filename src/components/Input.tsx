import React, { useCallback, useRef, useState } from 'react'
import { Todo } from '../App'
import cn from 'clsx'

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<Todo[]>
}

export const Input = ({ todos, setTodos }: Props): JSX.Element => {
  const [highlightUserError, setHighlightUserError] = useState(false)
  const todoNameRef = useRef<HTMLInputElement | null>(null)

  console.log('highlightUserError: ', highlightUserError)
  
  const handleOnChange = (e: React.SyntheticEvent) => {
    const el = e.target as HTMLInputElement
    const inputValue = el.value.trim()
    if (inputValue === '') return
    setHighlightUserError(false)
  }
  
  const handleAddTodo = useCallback(() => {
    if (!todoNameRef.current) return
    const inputValue = todoNameRef.current.value.trim()
    if (inputValue === '') {
      setHighlightUserError(true)
      setTimeout(() => setHighlightUserError(false), 3000)
      console.log('You can not submit an empty string')
      return
    } 
    const idArray = todos.map((todo) => todo.id)
    const nextId = idArray.length===0 
      ? 1
      : idArray.reduce((previousValue, currentValue) =>
        Math.max(previousValue, currentValue)
      ) + 1
    const newTodo = {
      userId: 1,
      id: nextId,
      title: inputValue,
      completed: false,
    } as Todo
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
    todoNameRef.current.value = ''
  }, [setTodos, todos])

  
  const handleOnKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === "Enter")
      handleAddTodo()
  }

  const inputClasses = cn({ 'error': highlightUserError  })

  return (
    <>
      <input ref={todoNameRef} type='text' className={inputClasses} onKeyUp={handleOnKeyUp} onChange={handleOnChange} />
      <button onClick={handleAddTodo}>+</button>
    </>
  )
}
