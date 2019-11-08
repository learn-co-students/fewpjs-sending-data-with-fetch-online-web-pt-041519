// Add your code here

function submitData(name, email) {
    
    fetch('http://localhost:3000/users', {
        method: 'Post',
        headers: { 'Content-Type': 'application/json', 'accept': 'application/json' },
        body: JSON.stringify({ name, email })
    }).then(res => { return res.json() }).then(json => document.body.innerHTML = json["id"]).catch(function(error) {
        alert("Unauthorized Access")
        documt.body.innerHTML = error.message
      })
} 