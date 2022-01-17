import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCategories } from '@store/categories/categoriesSlice'

export default function CategoriesList () {
  const categories = useSelector(getCategories)

  const categoriesList = categories.map((item) => {
    return (
      <span key={item.id}>
        <Link to={`/category/${item.id}`}>{item.name}</Link> {" "}
      </span>
    )
  })

  return (
    <div>
      <Link to="/">Main</Link> {" // "}
      {categoriesList}
    </div>
  )
}
