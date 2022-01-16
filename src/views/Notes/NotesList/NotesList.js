import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { getUserLogStatus } from '@store/users/usersSlice'
import { getNotesStatus, getNotes } from '@store/notes/notesSlice'
import { UserNotLogged } from '@components/Errors/UserNotLogged'

export default function NotesList () {
  const navigate = useNavigate()
  const userLoginStatus = useSelector(getUserLogStatus)
  const notesStatus = useSelector(getNotesStatus)
  const notes = useSelector(getNotes)

  let noteslist;

  if (notesStatus === "loading") {
    noteslist = "Loading"
  } else if (notesStatus === "succeeded") {
    console.log(notes)
    noteslist = notes.map((note) => {
      return(
        <div key={note.id}>
          <Link to={`${note.slug}`}><h3>{note.title}</h3></Link>
          <p>{note.created_at}</p>
          <p>{note.body}</p>
          <p>{note.category}</p>
        </div>
      )
    })
  }

  if (userLoginStatus === false) {
    return(
      <UserNotLogged />
    )
  } else {
    return (
      <section>
        {noteslist}
      </section>
    )
  }
}
