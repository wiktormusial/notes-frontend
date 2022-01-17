import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userLoggedOut, getUserData, getUsersStatus, getUserLogStatus } from '@store/users/usersSlice'
import { fetchNotes, getNotesStatus, reloadState } from '@store/notes/notesSlice'
import { fetchCategories, getCategoriesStatus, reloadCategoriesState } from '@store/categories/categoriesSlice'
import { removeToken } from '@utils/Auth/removeToken'

export default function Navbar () {
  const dispatch = useDispatch()
  const getUserStatus = useSelector(getUsersStatus)
  const userLoginStatus = useSelector(getUserLogStatus)
  const notesStatus = useSelector(getNotesStatus)
  const categoriesStatus = useSelector(getCategoriesStatus)

  useEffect(() => {
    if (getUserStatus === 'idle') {
      dispatch(getUserData())
    }

    if (categoriesStatus === 'idle' && userLoginStatus === true) {
      dispatch(fetchCategories())

      if (notesStatus === 'idle') {
        dispatch(fetchNotes())
      }
    }

  })

  async function handleUserClick() {
    await removeToken()
    await dispatch(userLoggedOut())
    await dispatch(reloadState())
    await dispatch(reloadCategoriesState())
  }

  if (userLoginStatus === true) {
    return(
      <header>
        <Link to="/"><h1>Navbar</h1></Link>
        <Link to="/" onClick={handleUserClick}>Logout</Link> { " " }
        <hr/>
      </header>
    )
  } else {
    return(
      <header>
        <Link to="/"><h1>Navbar</h1></Link>
        <Link to="/login">Login</Link> { " " }
        <Link to="/register">Register</Link> { " " }
        <hr/>
      </header>
    )
  }
}
