export async function getAllUsers() {

	const response = await fetch('/api/users');
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

