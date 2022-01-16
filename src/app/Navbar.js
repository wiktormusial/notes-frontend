import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userLoggedOut, getUserData, getUsersStatus, getUserLogStatus } from '@store/users/usersSlice'
import { fetchNotes, getNotesStatus } from '@store/notes/notesSlice'
import { removeToken } from '@utils/Auth/removeToken'

export default function Navbar () {
  const dispatch = useDispatch()
  const getUserStatus = useSelector(getUsersStatus)
  const userLoginStatus = useSelector(getUserLogStatus)
  const notesStatus = useSelector(getNotesStatus)

  useEffect(() => {
    if (getUserStatus === 'idle') {
      dispatch(getUserData())
    }

    if (notesStatus === 'idle' && userLoginStatus === true) {
      dispatch(fetchNotes())
    }
  })

  async function handleUserClick() {
    await removeToken()
    await dispatch(userLoggedOut())
  }

  if (userLoginStatus === true) {
    return(
      <header>
        <h1>Navbar</h1>
        <Link to="/" onClick={handleUserClick}>Logout</Link> { " " }
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
