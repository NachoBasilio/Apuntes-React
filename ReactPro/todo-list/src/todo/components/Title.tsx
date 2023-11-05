import React from 'react'
import { useTodos } from '../hooks/useTodos'

export const Title = () => {
    const {pendingsTodos} = useTodos()


  return (
    <h1>Todos pendientes: {pendingsTodos}</h1>
  )
}
