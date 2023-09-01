import {withRouter} from 'react-router-dom'
import Cookie from 'js-cookie'

import './index.css'

const Navbar = props => {
  const logOut = () => {
    const {history} = props
    Cookie.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <div className="header-main-container">
      <div className="nav-content">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
          className="logo"
        />
        <button type="button" className="logout-button" onClick={logOut}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default withRouter(Navbar)
