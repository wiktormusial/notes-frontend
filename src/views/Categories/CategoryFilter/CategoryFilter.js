import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { getNotes, getNotesStatus } from '@store/notes/notesSlice'
import { getCategoriesStatus } from '@store/categories/categoriesSlice'
import { getUserLogStatus } from '@store/users/usersSlice'
import NotesListElement from '@views/Notes/NotesList/NotesListElement'
import UserNotLogged from '@components/Errors/UserNotLogged'

export default function CategoryFilter() {
  const params = useParams()
  const notesStatus = useSelector(getNotesStatus)
  const categoriesStatus = useSelector(getCategoriesStatus)
  const userLogStatus = useSelector(getUserLogStatus)
  const notes = useSelector(getNotes)

  if(userLogStatus) {
    if (notesStatus === 'succeeded' && categoriesStatus === 'succeeded') {
      const filteredNotes = notes.filter((note) => note.category == params.id)

      const notesList = filteredNotes.map((note) => {
        return <NotesListElement key={note.id} note={note}/>
      })

      return (
        <div>{notesList}</div>
      )
    } else {
      return (
        <div>Loading</div>
      )
    }
  } else {
    return (
      <UserNotLogged />
    )
  }
}
