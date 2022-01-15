import { Formik, Form, Field } from 'formik';
import { AuthLoginValidationSchema } from './AuthLoginValidationSchema'

export default function AuthLogin () {

  function handleUserClick(values) {
    console.log(values)
  }

  return(
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={AuthLoginValidationSchema}
        onSubmit={(values) => handleUserClick(values)}
      >
      {({ errors, touched, isValidating }) => (
        <Form>
          <Field name="username" /><br/>
          {errors.username && touched.username && <div>{errors.username}</div>}
          <Field name="password"/><br/>
          {errors.password && touched.password && <div>{errors.password}</div>}
          <button type="submit">Submit</button>
        </Form>
      )}
      </Formik>
    </div>
  )
}
