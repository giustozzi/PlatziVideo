import React from 'react';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../actions'
import { connect } from 'react-redux';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png'
import userProfile from '../assets/static/user-icon.png'
const Header = props => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    props.logoutRequest({})
  }
  return(
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
            <img src={hasUser ? gravatar(user.email) : userProfile} alt={user.email} />
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser && <li><a href="/">{user.email}</a></li>}
          {hasUser ?
            <li><Link to="#logout" onClick={handleLogout}>Cerrar Sesión</Link></li> :
            <li><Link to="/login">Iniciar Sesión</Link></li>
          }
        </ul>
      </div>
    </header>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}
const mapDispatchToProps = {
  logoutRequest,
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
