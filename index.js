function submitData(userName, userEmail) {
    let url = "http://localhost:3000/users"
    let pageBody = document.querySelector('body');

    let data = {
        name: userName,
        email: userEmail
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    };

    return fetch(url, configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            pageBody.innerHTML += object.id;

            // THIS TEST IS STUPID AND WANTS THE STUPID WAY OF ADDING SOMETHING TO THE PAGE.
            // THIS IS HOW TO DO IT IF YOU DON'T WANT TO DUMB IT DOWN.

            // let indexNumber = document.createElement('h1');
            // indexNumber.innerText = object.id;
            // pageBody.appendChild(indexNumber);
            
        }).catch(function(error) {
            pageBody.innerHTML += error.message;
        });
}
