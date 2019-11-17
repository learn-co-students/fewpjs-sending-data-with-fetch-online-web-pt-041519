function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`
        })
    })
    .then(resp => {
        return resp.json()
    })
    .then(obj => document.body.innerHTML = obj.id)
    .catch(error => {
        alert('An error occurred!')
        document.body.innerHTML = error.message
    })
}
