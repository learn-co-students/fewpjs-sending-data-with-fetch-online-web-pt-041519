// Add your code here



const performPost = (url, data) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

const submitData = (name, email) => {
    return performPost('http://localhost:3000/users', {name, email})
    .then(res => res.json())
    .then(json => document.querySelector('body').innerHTML = JSON.stringify(json))
    .catch(err => document.querySelector('body').innerHTML = err)
}