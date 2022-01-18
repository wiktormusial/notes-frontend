import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCategories } from '@store/categories/categoriesSlice'
import { getUserLogStatus } from '@store/users/usersSlice'

export default function CategoriesList () {
  const categories = useSelector(getCategories)
  const userLoginStatus = useSelector(getUserLogStatus)

  const categoriesList = categories.map((item) => {
    return (
      <span key={item.id}>
        <Link to={`/category/${item.id}`}>{item.name}</Link> {" "}
      </span>
    )
  })

  if(userLoginStatus) {
    return (
      <div>
        <Link to="/">Main</Link> {" // "}
        {categoriesList}<br/>
      </div>
    )
  } else {
    return ""
  }
}
