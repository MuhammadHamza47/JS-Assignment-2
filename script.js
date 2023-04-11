// Q # 1:  Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

function addNo(number) {
  return function (value) {
    return value + number;
  };
}
// Create a closure with 5
const addFive = addNo(5);

// Use the returned function to add 5 to any number
console.log(addFive(10)); // Output: 15

// Q # 2  Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested

function recursiveSearch(array, value) {
    // base case: the array is empty
    if (array.length === 0) {
      return false;
    }
  
    // check if the first element is the value we are looking for
    if (array[0] === value) {
      return true;
    }
  
    // recursive case: search the rest of the array
    return recursiveSearch(array.slice(1), value);
  }
  

  const myArray = [1, 2, 3, 4, 5];
  const valueToSearch = 3;
  const isValueFound = recursiveSearch(myArray, valueToSearch);
  console.log(isValueFound); // true
  

//   Q # 3 Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.


function addParagraph(text) {
    // create a new paragraph element
    const newParagraph = document.createElement("p");
  
    // set the text content of the paragraph element
    newParagraph.textContent = text;
  
    // find the body element of the document
    const body = document.querySelector("body");
  
    // add the new paragraph element to the end of the body element
    body.appendChild(newParagraph);
    addParagraph("This is a new paragraph!");
  }
  

// Question 4


function addListItem(text) {
  const myList = document.querySelector("ul"); // get the first <ul> element in the document
  const newListItem = document.createElement("li"); // create a new <li> element
  newListItem.textContent = text; // set the text content of the new list item
  myList.appendChild(newListItem); // add the new list item to the end of the unordered list
}

// Example usage:
addListItem("New list item");

// Question 5

function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }
  



// Question 6


function saveObjectToLocalStorage(key, object) {
    // convert the object to a JSON string
    const objectJSON = JSON.stringify(object);
  
    // save the JSON string to localStorage using the provided key
    localStorage.setItem(key, objectJSON);
  }
  
  const myObject = { name: "John", age: 30 };
saveObjectToLocalStorage("myObjectKey", myObject);


// Question 7

function getObjectFromLocalStorage(key) {
    // get the JSON string from localStorage using the provided key
    const objectJSON = localStorage.getItem(key);
  
    // if the JSON string is not null, parse it and return the resulting object
    if (objectJSON !== null) {
      return JSON.parse(objectJSON);
    }
  
    // if the JSON string is null, return null
    return null;
  }

  let myObj = getObjectFromLocalStorage("myObjectKey");


// Question 8

let prevStudents = localStorage.getItem("students"); // get from LocalStorage
let students = prevStudents ? JSON.parse(prevStudents) : [];
function provideStudent() {
  let std = {
    name: prompt("Enter Name"),
    rollNo: +prompt("Enter Roll no"),
    teacher: prompt("Enter Teachers Name"),
    className: prompt("Enter Your Class"),
  };
  students.push(std);
  console.log(students);
  let stringify = JSON.stringify(students); // Convert it to String
  localStorage.setItem("students", stringify); // Save it to LocalStorage
}


