import axios from 'axios'


/*api helper that sets url for all http requests. 
use api.requestType in Routes
*/
const instance = axios.create({
	baseURL: 'http://localhost:3300/api',
})

instance.interceptors.request.use(
	(config) => {
		config.headers.authorization = localStorage.getItem('token')
		return config
	},
	(err) => {
		return Promise.reject(err)
	}
)

export default instance