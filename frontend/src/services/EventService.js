// client/src/services/EventService.js

import axios from 'axios'

export default {
	return axios.create({
		baseURL: `http://localhost:4000/`
	})
}

