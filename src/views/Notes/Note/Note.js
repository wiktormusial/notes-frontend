import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { getNotes, getNotesStatus } from '@store/notes/notesSlice'

export default function Note() {
  const params = useParams()
  const notesStatus = useSelector(getNotesStatus)
  const notes = useSelector(getNotes)

  if (notesStatus === 'succeeded') {
    const note = notes.find(element => element.slug === params.slug)
    const { id, title, created_at, body, category, content } = note
    return (
      <div>
        <h3>{title}</h3>
        <p>{created_at}</p>
        <p>{body}</p>
        <p>{content}</p>
        <p>{category}</p>
        <Link to={`edit`}>Edit note</Link>
      </div>
    )
  } else {
    return (
      <div>Test</div>
    )
  }
}
