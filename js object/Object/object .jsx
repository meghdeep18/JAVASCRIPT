const person = {    //this is a object
    firstName: "megh",
    lastName: "deep",
    id: 5566,
  };

  person.name = function() {
    // creating a function
    return this.firstName + " " + this.lastName;
  };
  
  // printing 
  document.getElementById("demo").innerHTML =
  "My name is " + person.name(); 