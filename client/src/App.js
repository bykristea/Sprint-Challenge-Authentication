import React from 'react'
import { Route, NavLink, withRouter } from 'react-router-dom'
import Login from './routes/login'
import Signup from './routes/signup';
import Jokes from './routes/jokes';

class App extends React.Component {
  logout = () => {
    localStorage.removeItem('token')
    this.props.history.push('/login')
  }

  render() {
    return (
      <>
        <h1>Welcome</h1>

        <ul>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/signup">Signup</NavLink></li>
          <li><NavLink to="/users">Jokes</NavLink></li>
          <li><button onClick={this.logout}>Logout</button></li>
        </ul>

        <main>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/jokes" component={Jokes} />
        </main>
      </>
    )
  }
}

export default withRouter(App)
