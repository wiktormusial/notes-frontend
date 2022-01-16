import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUserData, getUsersStatus, getUserLogStatus } from '@store/users/usersSlice'

export default function Navbar () {
  const dispatch = useDispatch()
  const getUserStatus = useSelector(getUsersStatus)
  const userLoginStatus = useSelector(getUserLogStatus)

  useEffect(() => {
    if (getUserStatus === 'idle') {
      dispatch(getUserData())
    }
  })

  if (userLoginStatus === true) {
    return(
      <header>
        <h1>Navbar</h1>
        <hr/>
      </header>
    )
  } else {
    return(
      <header>
        <h1>Navbar</h1>
        <Link to="/login">Login</Link> { " " }
        <Link to="/register">Register</Link> { " " }
        <hr/>
      </header>
    )
  }
}
