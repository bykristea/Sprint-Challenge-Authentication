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
				jokes: result.data,
			})
		} catch (err) {
			console.error(err)
		}
	}

	render() {
		return (
			<>
				<h3>Knock, Knock...</h3>
                <p>{`kid: who's there? dad: I'm you kid: I'm you who? dad: Hi, you-hoo. I'm dad.
                `}</p>

				<ul>
                {this.state.jokes.map((jokes, i) => {
						return <li key={jokes.id}>{jokes.joke}</li>
					})}
					
				</ul>
			</>
		)
	}
}

export default withAuth(Jokes)