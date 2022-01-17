import { useSelector } from 'react-redux'
import { Field } from 'formik'
import { getCategories } from '@store/categories/categoriesSlice'

export default function CategoriesFormBox () {
  const categories = useSelector(getCategories)
  const optionsList = categories.map((category) => {
    return <option value={category.id} key={category.id}>{category.name}</option>
  })

  return (
    <>
      <label htmlFor="category">Categories</label><br/>
      <Field name="category" as="select">
        <option value="blank">------</option>
        {optionsList}
      </Field><br/>
    </>
  )
}
