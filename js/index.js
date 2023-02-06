//fileds for name, age, and description
// how to make input box?
//
// create monster button
//click button => monster added to the list and saved in the API

let inputName = document.createElement("input")
inputName.setAttribute("type", "text" )
inputName.setAttribute("value", "Name...")
console.log(inputName)
document.body.appendchild(inputName)



fetch("http://localhost:3000/monsters")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the data from the response to do DOM manipulation
      data.forEach(ele => {
        let name = document.createElement("h2")
        name.setAttribute("id", `${ele.name}`)
        name.innerHTML = ele.name
        document.body.appendChild(name)

        let age = document.createElement("h4")
        age.setAttribute("id", `${ele.age}`)
        age.innerHTML = "Age: "+ ele.age
        document.body.appendChild(age)

        let description = document.createElement("div")
        description.setAttribute("id", `${ele.description}`)
        description.innerHTML = "Bio: "+ ele.description
        document.body.appendChild(description)

      })
    });
  
  
  