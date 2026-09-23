import EmptyState from '@/components/shared/emptyState/EmptyState'
import React from 'react'
import { useSelector } from 'react-redux'

const Plays = () => {

  const { city } = useSelector((state) => state.location)

  return (
    <EmptyState title={`Plays in ${city}`} />
  )
}

export default Plays