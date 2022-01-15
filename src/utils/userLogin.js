import axios from 'axios';

export default async function userLogin (values) {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}auth/login/`, {
      username: values.username,
      password: values.password
    })
    localStorage.setItem('token', response.data.key);
    return response.data
  } catch (error) {
    return error.response.data.non_field_errors
  }
}
