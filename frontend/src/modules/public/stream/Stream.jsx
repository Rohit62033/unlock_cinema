import EmptyState from '@/components/shared/emptyState/EmptyState'
import { useSelector } from 'react-redux'


const Stream = () => {

  const { city } = useSelector((state) => state.location)

  return (
    <EmptyState title={`Stream in ${city}`} />
  )
}

export default Stream