import { Link } from 'react-router-dom'

export default function NotesListElement(props) {
  const { id, slug, title, created_at, body, category } = props.note

  return (
    <div>
      <Link to={`${slug}`}><h3>{title}</h3></Link>
      <p>{created_at}</p>
      <p>{body}</p>
      <p>{category}</p>
    </div>
  )
}
