import React from 'react'
import { Link } from 'react-router-dom'

import "./RegisterPage.css"

import backArrow from "../../assets/register_back_arrow.svg"

interface Props {}

const apiAddress : string = import.meta.env.VITE_APP_API_HOST

const RegisterPage = (props: Props) => {
  
  const handleRegister = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
      name: { value: string };
      number: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    const name = target.name.value;
    const number = target.number.value;
    // console.log(email, password, name, number);
    // console.log(apiAddress);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("X-API-Key", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJpZCI6IjY1ZWUxNDkyMGNiNmI4NzUwMDJmYzBmZiIsImVtYWlsIjoiYWRtaW5AdGVzdC5jb20iLCJ1c2VybmFtZSI6InRlc3QiLCJyb2xlIjozfSwiaWF0IjoxNzEwMTAyNDc4LCJleHAiOjE3MTAxODg4Nzh9.tg0ArR3mH-Nu_xGe1YKKT1yPxAXruCxl7JIgeMo634w");

    const urlencoded = new URLSearchParams();
    urlencoded.append("email", target.email.value);
    urlencoded.append("username", target.name.value);
    urlencoded.append("password", target.password.value);
    urlencoded.append("role", "3");
    urlencoded.append("internalUser", "true");

    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow"
    };

    fetch(apiAddress+"auth/register", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }

  return (
    <div className="register-page">
      <div className="register-container">
        <Link to="/" style={{color: "white"}}>
          <div className="back-elem">
            <img src={backArrow} style={{height: "24px", padding: 0, color: "white"}}  className="logo" alt="Back Arrow" />
            <h4 style={{margin: 0}}>Back</h4>
          </div>
        </Link>
        <h2 style={{margin: "0 0 0 2rem"}}>Registrarse</h2>
        <form 
          // ref={loginRef} 
          onSubmit={handleRegister}
        >
          <div className="form-container">
            <input name="email" placeholder="Email" className="input-style" />
            <input name="password" type="password" placeholder="Contraseña" className="input-style" />
            <h4>Datos personales</h4>
            <input name="name" placeholder="Nombre Completo" className="input-style" />
            <input name="number" placeholder="Telefono" className="input-style" />
            <button type="submit" className="button-style" >Register</button>
            {/* <span style={{marginLeft: "2rem", marginRight: "2rem", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", gap: "1rem"}}>
              <Link to="/register"><button className="button-style" >Register</button></Link>
            </span> */}
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage