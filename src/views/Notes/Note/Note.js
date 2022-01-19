import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { getNotes, getNotesStatus } from '@store/notes/notesSlice'
import { getCategories } from '@store/categories/categoriesSlice'
import { getCategory } from '@utils/Categories/getCategory'
import { dateFormatter } from '@utils/Date/dateFormatter'

export default function Note() {
  const params = useParams()
  const notesStatus = useSelector(getNotesStatus)
  const notes = useSelector(getNotes)
  const categories = useSelector(getCategories)

  if (notesStatus === 'succeeded') {
    const note = notes.find(element => element.slug === params.slug)
    const { id, title, created_at, body, category, content } = note
    return (
      <div>
        <h3>{title}</h3>
        <p>{dateFormatter(created_at)}</p>
        <p>{body}</p>
        <p>{content}</p>
        <Link to={`/category/${getCategory(categories, category).id}`}>{getCategory(categories, category).name}</Link><br/>
        <Link to={`edit`}>Edit note</Link>
      </div>
    )
  } else {
    return (
      <div>Test</div>
    )
  }
}
