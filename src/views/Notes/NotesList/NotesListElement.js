import { Link } from 'react-router-dom'
import { dateFormatter } from '@utils/Date/dateFormatter'

export default function NotesListElement(props) {
  const { slug, title, created_at, body, category } = props.note

  return (
    <div>
      <Link to={`/${slug}`}><h3>{title}</h3></Link>
      <p>{dateFormatter(created_at)}</p>
      <p>{body}</p>
      <p>{category}</p>
    </div>
  )
}
