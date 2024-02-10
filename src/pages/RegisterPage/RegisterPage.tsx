import React from 'react'
import { Link } from 'react-router-dom'

interface Props {}

const RegisterPage = (props: Props) => {
  return (
    <>
        <div>RegisterPage</div>
        <Link to="/"><button>Login</button></Link>
    </>
  )
}

export default RegisterPage