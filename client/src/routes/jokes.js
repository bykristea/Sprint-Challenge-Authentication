import React from 'react'
import api from '../helpers/api'
import withAuth from '../helpers/auth'

class Jokes extends React.Component {
	state = {
		jokes: [],
	}

	async componentDidMount() {
		try {
			const result = await api.get('/jokes')

			this.setState({
				users: result.data,
			})
		} catch (err) {
			console.error(err)
		}
	}

	render() {
		return (
			<>
				<h3>Knock, Knock...</h3>

				<ul>
					<li>Jokes</li>
				</ul>
			</>
		)
	}
}

export default withAuth(Jokes)