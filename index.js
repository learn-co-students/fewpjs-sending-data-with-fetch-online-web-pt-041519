function submitData() {
    let formData = {
        name: "Steve",
        email: "steve@steve.com"
      }

      let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      }
      
      return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            let p = document.createElement("p");
            let node = document.createTextNode(object.id)
            p.appendChild(node);
            document.body.appendChild(p)
        })
        .catch(function(error){
            let errorP = document.createElement("p");
            let errorNode = document.createTextNode(error.message)
            errorP.appendChild(errorNode);
            document.body.appendChild(errorP) 
        })
    }
