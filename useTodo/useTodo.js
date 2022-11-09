import { todoReducer } from '../helpers/todoReducer'
import { useEffect, useReducer } from 'react'

const init = () => JSON.parse(localStorage.getItem('todos')) || []

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleNewTodo = (todo) => {
    dispatch({
      type: '[TODO] Add Todo',
      payload: todo,
    })
  }

  const handleDeleteTodo = (id) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id,
    })
  }

  const handleToggleTodo = (id) => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id,
    })
  }

  const todoCount = todos.length

  const pendingTodoCount = todos.filter((todo) => !todo.done).length

  return {
    todos,
    todoCount,
    pendingTodoCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  }
}
