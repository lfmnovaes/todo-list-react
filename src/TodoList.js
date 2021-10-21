import React from 'react'
import Todo from './Todo'

export default function TodoList({ todoList }) {
  return (
    todoList.map(e => {
      return <Todo key={e.id} todo={e} />
    })
  )
}
