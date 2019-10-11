import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import { Link } from 'react-router-dom';
import '../assets/styles/Register.scss';

const Register = props => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: ''
  });

  const handleSubmit = event => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push("/");
  }
  
  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }
  
  return(
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Nombre"
            name="name"
            onChange={handleInput}
          />
          <input
            className="input"
            type="text"
            placeholder="Correo"
            name="email"
            onChange={handleInput}
          />
          <input
            className="input"
            type="password"
            placeholder="Contraseña"
            name="password"
            onChange={handleInput}
          />
          <button className="button">Registrarme</button>
        </form>
        <Link to="/login">Iniciar sesión</Link>
      </section>
    </section>
  )
}
const mapDispatchToProps = {
  registerRequest
}
export default connect(null,mapDispatchToProps)(Register);