// Add your code here
function submitData(name, email) {

    // let formData = {
    //   name: name,
    //   email: email
    //   };
       
      let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(name, email)
      };
       
      fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
          // let b = document.body;
          // let p = document.createElement('p');
          // p.innerHTML = `${object['id']}`;
          // b.appendChild(p);
          document.body.innerHTML = object.id;
                    })

        .catch(function(error) {
          document.body.innerHTML = `${error.message}`;
        });

}