import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik';
import { useNavigate } from "react-router-dom";
import { getUserData, getUserLogStatus } from '@store/users/usersSlice'
import userRegister from '@utils/Auth/userRegister'
import { UserLogged } from '@components/Errors/UserLogged'
import { AuthRegisterValidationSchema } from './AuthRegisterValidationSchema'

export default function AuthRegister () {
  const [registerStatus, setRegisterStatus] = useState()
  const [error, setError] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userLoginStatus = useSelector(getUserLogStatus)

  function handleUserClick(values) {
    userRegister(values)
      .then(result => setRegisterStatus(result))
  }

  useEffect(() => {
    if (registerStatus !== undefined) {
      if (registerStatus.key) {
        dispatch(getUserData())
        navigate('/register/success')
      } else {
        setError(registerStatus)
      }
    }
  }, [registerStatus, navigate, dispatch])

  let error_list

  if (error !== undefined) {
    error_list = Object.values(error).map((i) => {
      return <div key={i}>{i}</div>
    })
  }

  if (userLoginStatus === true) {
    return <UserLogged />
  } else {
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
            {error_list}
            <button type="submit">Submit</button>
          </Form>
        )}
        </Formik>
      </div>
    )
  }
}
