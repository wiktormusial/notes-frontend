import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { getNotes, getNotesStatus } from '@store/notes/notesSlice'
import { getCategoriesStatus } from '@store/categories/categoriesSlice'
import NotesListElement from '@views/Notes/NotesList/NotesListElement'

export default function CategoryFilter() {
  const params = useParams()
  const notesStatus = useSelector(getNotesStatus)
  const categoriesStatus = useSelector(getCategoriesStatus)
  const notes = useSelector(getNotes)

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
}
