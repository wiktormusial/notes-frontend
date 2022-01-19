import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { getNotes, getNotesStatus, editNote } from '@store/notes/notesSlice'
import CategoriesFormBox from '@components/Categories/CategoriesFormBox/CategoriesFormBox'
import { NoteEditValidationSchema } from './NoteEditValidationSchema'

export default function NoteEdit() {
  const params = useParams()
  const dispatch = useDispatch()
  const notesStatus = useSelector(getNotesStatus)
  const notes = useSelector(getNotes)

  function handleUserClick (values) {
    dispatch(editNote({ id: values.id, title: values.title, body: values.body, category: values.category, }))
  }

  if (notesStatus === 'succeeded') {
    const note = notes.find(element => element.slug === params.slug)
    return(
      <div>
        <Formik
          initialValues={{
            id: note.id,
            title: note.title,
            body: note.body,
            category: note.category,
          }}
          validationSchema={NoteEditValidationSchema}
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
            <CategoriesFormBox />
            <button type="submit">Submit</button>
          </Form>
        )}
        </Formik>
      </div>
    )
  } else {
    return(
      <div>Test</div>
    )
  }
}
