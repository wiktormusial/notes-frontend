import { useDispatch } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { addNewCategory } from '@store/categories/categoriesSlice'

export default function CategoryAdd () {
  const dispatch = useDispatch()

  function handleUserClick(values) {
    if (values.name.trim() !== '') {
      dispatch(addNewCategory(values))
    }
  }

  return (
  <section>
    <h3>Add category</h3>
    <Formik
    initialValues={{
      name: ''
    }}
    onSubmit={(values) => handleUserClick(values)}
    >
    {({ errors, touched, isValidating }) => (
      <Form>
        <label htmlFor="name">Name</label><br/>
        <Field name="name"/>
        <button type="submit">Add</button>
      </Form>
    )}
    </Formik>
  </section>
  )
}
