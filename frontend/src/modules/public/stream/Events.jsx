import EmptyState from '@/components/shared/emptyState/EmptyState'
import React from 'react'
import { useSelector } from 'react-redux'

const Events = () => {

  const { city } = useSelector((state) => state.location)

  return (
    <EmptyState title={`Events in ${city}`} />
  )
}

export default Events