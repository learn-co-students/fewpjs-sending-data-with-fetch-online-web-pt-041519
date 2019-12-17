

function submitData(name, email) {
    let configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`
        })
    };

    return fetch('http://localhost:3000/users', configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            const body = document.querySelector('body')
            body.innerHTML += `<h1>${object.id}</h1>`
        })
        .catch(function(error) {
            const body = document.querySelector('body')
            body.innerHTML += error
        })
    
};

//submitData();
