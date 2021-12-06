import { Todo } from '../App'

const getTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const json = await response.json()
  return json.filter((_todo: Todo, index: number) => index < 10 )
  /*     .then(response => response.json())
      .then(json => setTodos(json.filter((_todo: Todo, index: number) => index < 10))) */
}

export default getTodos