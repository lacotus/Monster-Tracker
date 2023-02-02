
// 1-25-23: Service to handle reaching out to expressjs

export async function getAllUsers() {

	const response = await fetch('/users');
	return await response.json();

}

export async function getUserBattles(userID) {

	console.log('UserService\'s reading of userID: ', userID)
	const response = await fetch('/userbattles', { body: { 'userID': userID} });
	return await response.json();

}

export async function createUser(data) {
	
	console.log('createUser in UserServices was ran.')
	console.log('data: ', data)
	console.log('JSON.stringify: ', JSON.stringify(data))
	
	return fetch(`/users`, {
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify(data)
	}).then(res => {
		return res.json()
	})
}

export async function updateUserID(data) {
	
	return fetch(`/userbattles`, {
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify(data)
	}).then(res => {
		return res.json()
	})



