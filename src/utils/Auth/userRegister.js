import axios from 'axios';

export default async function userRegister (values) {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}auth/registration/`, {
      "username": values.username,
      "email": values.email,
      "password1": values.password,
      "password2": values.password2,
    })
    localStorage.setItem('token', response.data.key);
    return response.data
  } catch (error) {
    return error.response.data
  }
}
