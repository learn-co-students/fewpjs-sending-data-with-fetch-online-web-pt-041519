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
  .then(response => response.json())
  .then(json => document.querySelector('body').innerHTML = JSON.stringify(json))
  .catch(errorMsg => document.querySelector('body').innerHTML = errorMsg)

}










