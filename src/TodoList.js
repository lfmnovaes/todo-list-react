import React from 'react'
import Todo from './Todo'

export default function TodoList({ todoList, toggleTodo }) {
  return (
    todoList.map(e => {
      return <Todo key={e.id} todo={e} toggleTodo={toggleTodo} />
    })
  )
}
