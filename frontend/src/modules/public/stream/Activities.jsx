import EmptyState from '@/components/shared/emptyState/EmptyState'
import React from 'react'
import { useSelector } from 'react-redux'

const Activities = () => {

  const { city } = useSelector((state) => state.location)

  return (
    <EmptyState title={`Activities in ${city}`} />
  )
}

export default Activities