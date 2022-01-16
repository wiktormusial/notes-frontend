import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { getUserLogStatus } from '@store/users/usersSlice'
import { getNotesStatus, getNotes } from '@store/notes/notesSlice'
import { UserNotLogged } from '@components/Errors/UserNotLogged'
import NotesListElement from '@views/Notes/NotesList/NotesListElement'

export default function NotesList () {
  const navigate = useNavigate()
  const userLoginStatus = useSelector(getUserLogStatus)
  const notesStatus = useSelector(getNotesStatus)
  const notes = useSelector(getNotes)

  let noteslist;

  if (notesStatus === "loading") {
    noteslist = "Loading"
  } else if (notesStatus === "succeeded") {
    noteslist = notes.map((note) => {
      return(
        <NotesListElement key={note.id} note={note} />
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
