import React from 'react'
import { withRouter } from 'react-router-dom'
import api from '../helpers/api'

/* POST to api/login
after log in routes api/jokes
*/

class Login extends React.Component {
	state = {
		username: '',
		password: '',
	}

	handleSubmit = async (evt) => {
		evt.preventDefault()

		try {
			const { username, password } = this.state
			
			const result = await api.post('/login', {
				username,
				password,
			})

			localStorage.setItem('token', result.data.token)
			this.props.history.push('/jokes')
		} catch (err) {
			console.error(err)
		}
	}

	handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value,
		})
	}
	
	render() {
		return (
			<>
				<h3>Login</h3>

				<form onSubmit={this.handleSubmit}>
					<input type="text" name="username" placeholder="Username" onChange={this.handleChange} value={this.state.username} />
					<input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} />
					<button type="submit">Login</button>
				</form>
			</>
		)
	}
}

export default withRouter(Login)