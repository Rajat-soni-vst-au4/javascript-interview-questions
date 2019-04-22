

/***  
 * An immediately-invoked function expression (or IIFE, pronounced "iffy") is a JavaScript programming 
 * language idiom which produces a lexical scope using JavaScript's function scoping. 
 * Immediately-invoked function expressions can be used to avoid variable hoisting from within blocks, 
 * protect against polluting the global environment and simultaneously allow public access to methods 
 * while retaining privacy for variables defined within the function. 
 * 
 * ref: https://en.wikipedia.org/wiki/Immediately-invoked_function_expression
 * ***/


//IIFEs - syntax

(function() {
  // logic here
})();




// Example - 01 : 

(function(window) {
  "use strict";
  function Person(name, address) {
    this.name = name;
    this.address = address;
  }

  Person.prototype.sayHello = function() {
    console.log(this.name + " says hello");
  };

  window.Person = Person;
})(window);

function init() {
  var PersonObj = new Person("Pradeep", "Bangalore");
  PersonObj.sayHello();
  console.log(PersonObj);
}

init();
