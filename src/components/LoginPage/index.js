import {Component} from 'react'

import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class LoginPage extends Component {
  state = {userId: '', UserPin: '', showErrorMsg: false, errorMsg: ''}

  onChangeUserPin = event => {
    this.setState({userId: event.target.value})
  }

  onChangePin = event => {
    this.setState({UserPin: event.target.value})
  }

  onSuccessView = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()

    const {userId, UserPin} = this.state
    const userDetails = {
      user_id: userId,
      pin: UserPin,
    }
    const apiUrl = 'https://apis.ccbp.in/ebank/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const responseData = await response.json()
    if (response.ok === true) {
      this.onSuccessView(responseData.jwt_token)
    } else {
      this.setState({showErrorMsg: true, errorMsg: responseData.error_msg})
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {showErrorMsg, UserPin, errorMsg, userId} = this.state
    return (
      <div className="login-page-main-container">
        <div className="login-page-form-container">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
              className="image"
            />
          </div>
          <form className="form-container" onSubmit={this.submitForm}>
            <h1>Welcome Back</h1>
            <div className="input-container">
              <label htmlFor="userID" className="label">
                USER ID
              </label>
              <input
                value={userId}
                type="text"
                placeholder="Enter User ID"
                id="userID"
                className="input-field"
                onChange={this.onChangeUserPin}
              />
            </div>
            <div className="input-container">
              <label htmlFor="pin" className="label">
                PIN
              </label>
              <input
                type="password"
                value={UserPin}
                placeholder="Enter PIN"
                id="pin"
                className="input-field"
                onChange={this.onChangePin}
              />
            </div>
            <button type="submit" className="button">
              Login
            </button>
            {showErrorMsg && <p className="error-para">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginPage
