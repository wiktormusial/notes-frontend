export default function getToken() {
  const token = localStorage.getItem('token')

  if (token === undefined) {
    return undefined
  } else {
    return token
  }
}
