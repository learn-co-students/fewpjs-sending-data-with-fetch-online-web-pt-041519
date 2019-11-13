// Add your code here
function  submitData(name, email) {
    let configObject = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json", 
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    };

    return fetch('http://localhost:3000/users', configObject)
    .then( function(res) {
        return res.json()
    })
    .then( function(object) {
        document.body.innerHTML = object["id"]
    })
    .catch(function(error) {
        document.body.innerHTML = error.message
    })
}

