import React from 'react'
import CreateProduct from './createProduct'
import { useGetCurrentUser } from '@/shared/hooks/useGetCurrentUser'

const Dashbor = () => {
  const {currentUser} = useGetCurrentUser()
  if (currentUser?.email) {
    return (
      <h1>{`${currentUser?.firstName} ${currentUser?.lastName}`}</h1>
    )
  }
  return (
    <div>
      <h1 className='mt-9'>hello</h1>

    </div>
  )
}

export default Dashbor
