import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData, getUsersStatus } from '@store/users/usersSlice'

export default function Navbar () {
  const dispatch = useDispatch()
  const getUserStatus = useSelector(getUsersStatus)

  useEffect(() => {
    if (getUserStatus === 'idle') {
      dispatch(getUserData())
    }
  })

  return(
    <h1>Navbar</h1>
  )
}
