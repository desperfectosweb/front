import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import comunicareLogo from "../../assets/comunicare_icono.svg"
import "./LoginPage.css"

interface Props {}


const LoginPage = (props: Props) => {
  
  // const loginRef = React.useRef();
  let navigate = useNavigate()

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    console.log(email, password);
    return navigate("/home/");
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="logo-container">
          <img src={comunicareLogo} style={{width: "auto", height: "auto", padding: 0}} className="logo" alt="Comunicare logo" />
          Comunicare
        </div>
        <form 
          // ref={loginRef} 
          onSubmit={handleSubmit}
        >
          <div className="login-form-container">
            <input name="email" placeholder="Email" className="input-style" />
            <input name="password" type="password" placeholder="Contraseña" className="input-style" />
            <span style={{marginTop: "1rem", marginLeft: "2rem", marginRight: "2rem", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", gap: "1rem"}}>
              <button type="submit" className="button-style" >Iniciar</button>
              <Link to="/register"><button className="button-style" >Registrarse</button></Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage