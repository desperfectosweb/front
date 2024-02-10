import React from 'react'
import { Link } from 'react-router-dom'

interface Props {}

const LoginPage = (props: Props) => {
  return (
    <>
      <div>LoginPage</div>
      <Link to="/home/"><button>login</button></Link>
      <Link to="/register"><button>register</button></Link>
    </>
  )
}

export default LoginPage