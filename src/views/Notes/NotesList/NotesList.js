import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUserLogStatus } from '@store/users/usersSlice'
import { UserNotLogged } from '@components/Errors/UserNotLogged'
export default function NotesList () {
  const navigate = useNavigate()
  const userLoginStatus = useSelector(getUserLogStatus)

  if (userLoginStatus === false) {
    return(
      <UserNotLogged />
    )
  } else {
    return(
      <section>
        <h2>Notes List</h2>
      </section>
    )
  }
}
