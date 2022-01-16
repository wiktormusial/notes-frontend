import { useSelector, useDispatch } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { getUserLogStatus } from '@store/users/usersSlice'
import { addNewNote } from '@store/notes/notesSlice'
import { NoteAddValidationSchema } from './NoteAddValidationSchema'

export default function NoteAdd () {
  const dispatch = useDispatch()
  const userLogStatus = useSelector(getUserLogStatus)

  function handleUserClick (values) {
    dispatch(addNewNote(values))
  }

  if (!userLogStatus) {
    return (
      <div>Loading</div>
    )
  } else {
    return (
      <div>
        <Formik
          initialValues={{
            title: '',
            body: ''
          }}
          validationSchema={NoteAddValidationSchema}
          onSubmit={(values) => handleUserClick(values)}
        >
        {({ errors, touched, isValidating }) => (
          <Form>
            <label htmlFor="title">Title</label><br/>
            <Field name="title"/><br/>
            {errors.title && touched.title && <div>{errors.title}</div>}
            <label htmlFor="body">Body</label><br/>
            <Field name="body" as="textarea"/><br/>
            {errors.body && touched.body && <div>{errors.body}</div>}
            <button type="submit">Submit</button>
          </Form>
        )}
        </Formik>
      </div>
    )
  }
}
