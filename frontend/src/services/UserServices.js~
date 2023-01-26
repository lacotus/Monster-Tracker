
// 1-25-23: Service to handle reaching out to expressjs

export async function getAllUsers() {

	const response = await fetch('/users');
	return await response.json();

}

export async function createUser(data) {
	const response = await fetch(`/api/user/`, {
		method: 'POST',
		headers: {'ContentType': 'application/json'},
		body: JSON.stringify({user: data})
	})
	
	return await response.json();
}

