// Add your code here

// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// };
 
// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };
 
// fetch("http://localhost:3000/dogs", configObj)
//   .then(function(res){
//     return res.json();
//   })
//   .then(function(object){
//     console.log(object);
//   })
//   .catch(function(error){
//     alert("Bad Things!");
//     console.log(error.message);
// });



function submitData(name, email){
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name,
      email
    })
  })
  .then(function(res){
    return res.json();
  })
  .then(function(object){
    document.body.innerHTML = object["id"];
  })
  .catch(function(error){
    alert("errorrr");
    document.body.innerHTML = error.message;
  });
};