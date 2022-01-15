import { Formik, Form, Field } from 'formik';
import { AuthRegisterValidationSchema } from './AuthRegisterValidationSchema'

export default function AuthLogin () {

  function handleUserClick(values) {
    console.log(values)
  }

  return(
    <div>
      <h2>Register</h2>
      <Formik
        initialValues={{
          username: '',
          password: '',
          password2: '',
          email: '',
        }}
        validationSchema={AuthRegisterValidationSchema}
        onSubmit={(values) => handleUserClick(values)}
      >
      {({ errors, touched, isValidating }) => (
        <Form>
          <label htmlFor="username">Username</label><br/>
          <Field name="username" /><br/>
          {errors.username && touched.username && <div>{errors.username}</div>}
          <label htmlFor="email">Email</label><br/>
          <Field name="email" /><br/>
          {errors.email && touched.email && <div>{errors.email}</div>}
          <label htmlFor="password">Password</label><br/>
          <Field name="password" type="password"/><br/>
          {errors.password && touched.password && <div>{errors.password}</div>}
          <label htmlFor="password2">Retype password</label><br/>
          <Field name="password2" type="password"/><br/>
          {errors.password2 && touched.password2 && <div>{errors.password2}</div>}
          <button type="submit">Submit</button>
        </Form>
      )}
      </Formik>
    </div>
  )
}