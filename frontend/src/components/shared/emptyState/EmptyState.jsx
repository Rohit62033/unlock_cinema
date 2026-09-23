import React from 'react'
import { useNavigate } from 'react-router-dom'

const EmptyState = ({title}) => {
  const navigate = useNavigate()
  return (
    <div className='w-full h-[70vh] md:h-[80vh] max-w-7xl mx-auto flex flex-col items-center justify-center md:mt-10' >
      <h1 className='font-bold text-2xl text-gray-600 '>{title}</h1>

      <div className=' flex flex-col items-center mt-10 px-2'>
        <img src={"https://assets-in.bmscdn.com/discovery-catalog/lib/tr:w-600/no-entertainement-in-area-202007011731.png"} className="w-full md:w-2/3 lg:w-full H-auto" alt="" />

        <h2 className='font-semibold text-lg mt-5'>Nope! Nothing! Nada!</h2>
        <p className='text-gray-500 max-w-100 text-center text-sm'>Sorry! There was nothing to load on this page.Kindly visit the homepage for more entertainment.</p>
        <button 
        onClick={()=>navigate('/')}
        className='bg-primary text-white px-5 rounded-md w-full py-2 mt-2'>Visit Homepage</button>
      </div>
    </div>
  )
}

export default EmptyState