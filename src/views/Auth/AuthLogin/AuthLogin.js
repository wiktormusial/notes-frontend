import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form, Field } from 'formik';
import { useNavigate } from "react-router-dom";
import userLogin from '@utils/Auth/userLogin'
import { getUserData } from '@store/users/usersSlice'
import { AuthLoginValidationSchema } from './AuthLoginValidationSchema'

export default function AuthLogin () {
  const [loginStatus, setLoginStatus] = useState()
  const [error, setError] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function handleUserClick(values) {
    userLogin(values)
      .then(result => setLoginStatus(result))
  }

  useEffect(() => {
    if (loginStatus !== undefined) {
      if (loginStatus.key) {
        dispatch(getUserData())
        navigate('/')
      } else {
        setError(loginStatus)
      }
    }
  }, [loginStatus, navigate, dispatch])

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
          <Field name="password" type="password"/><br/>
          {errors.password && touched.password && <div>{errors.password}</div>}
          {error}
          <br/>
          <button type="submit">Submit</button>
        </Form>
      )}
      </Formik>
    </div>
  )
}
