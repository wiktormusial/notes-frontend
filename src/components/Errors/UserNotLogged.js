import { Link } from "react-router-dom"

export function UserNotLogged() {
  return(
    <Link to="/login">Log in to see content</Link>
  )
}
