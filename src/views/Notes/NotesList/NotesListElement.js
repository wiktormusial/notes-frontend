import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCategories } from '@store/categories/categoriesSlice'
import { getCategory } from '@utils/Categories/getCategory'
import { dateFormatter } from '@utils/Date/dateFormatter'

export default function NotesListElement(props) {
  const categories = useSelector(getCategories)
  const { id, slug, title, created_at, body, category } = props.note

  return (
    <div>
      <Link to={`/${slug}`}><h3>{title}</h3></Link>
      <p>{dateFormatter(created_at)}</p>
      <p>{body}</p>
      <Link to={`/category/${getCategory(categories, category).id}`}>{getCategory(categories, category).name}</Link>
    </div>
  )
}
