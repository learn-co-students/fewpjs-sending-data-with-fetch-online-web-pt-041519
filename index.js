// Add your code here


const submitData = (name, email) => {
  let formData = {
    name: name,
    email: email
  }
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
  body: JSON.stringify(formData)
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    document.body.innerHTML = object["id"]
  })
  .catch(function(error) {
    document.body.innerHTML = error.message
  })
}










