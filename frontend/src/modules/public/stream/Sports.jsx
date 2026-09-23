import EmptyState from '@/components/shared/emptyState/EmptyState'
import React from 'react'
import { useSelector } from 'react-redux'

const Sports = () => {

  const { city } = useSelector((state) => state.location)

  return (
    <EmptyState title={`Sports in ${city}`} />
  )
}

export default Sports