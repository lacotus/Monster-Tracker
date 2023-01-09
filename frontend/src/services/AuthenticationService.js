import EventService from '@/services/EventService'

export default {
	register (credentials) {
		return EventService().post('register', credentials)
	}
}

// How to call method: 
// AutenticationService.register({
// 	email: 'testing@gmail.com',
// 	password: '123456'
// })

