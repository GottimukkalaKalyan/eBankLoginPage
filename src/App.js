import {Switch, Route, Redirect} from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import Authenticate from './components/authenticteUser'
import NotFound from './components/notfound'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={LoginPage} />
    <Authenticate exact path="/" component={Home} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
