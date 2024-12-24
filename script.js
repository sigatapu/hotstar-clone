// Array of element ids
const ids = ["one", "two", "three", "four", "five", "six", "seven"];

// Variable to keep track of the currently selected icon
let selectedIcon = null;

// Function to handle mouse enter
function handleMouseEnter(event) {
  if (event.target !== selectedIcon) {
    event.target.style.color = "#ffffff"; // Change color to white
  }
}

// Function to handle mouse leave
function handleMouseLeave(event) {
  if (event.target !== selectedIcon) {
    event.target.style.color = "#c9c9c9"; // Change color back to original
  }
}

// Function to handle click event
function handleClick(event) {
  if (selectedIcon) {
    selectedIcon.style.color = "#c9c9c9"; // Reset color of the previously selected icon
  }
  event.target.style.color = "#ffffff"; // Change color of the clicked icon
  selectedIcon = event.target; // Update the selected icon
}

// Loop through each id and add event listeners
ids.forEach(id => {
  let element = document.getElementById(id);
  if (element) {
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    element.addEventListener("click", handleClick);
  }
});




let profile = document.getElementById("profile");
let search = document.getElementById("search");
let home = document.getElementById("home");
let tv = document.getElementById("tv");
let movies = document.getElementById("movies");
let sports = document.getElementById("sports");
let categories = document.getElementById("categories");


let one = document.getElementById("one");
one.addEventListener("click",
  function(){
      profile.style.display="block";
      search.style.display="none";
      home.style.display="none";
      tv.style.display="none";
      movies.style.display="none";
      sports.style.display="none";
      categories.style.display="none";

  }
);


let two = document.getElementById("two");
two.addEventListener("click",
  function(){
      profile.style.display="none";
      search.style.display="block";
      home.style.display="none";
      tv.style.display="none";
      movies.style.display="none";
      sports.style.display="none";
      categories.style.display="none";

  }
);


let three = document.getElementById("three");
three.addEventListener("click",
  function(){
      profile.style.display="none";
      search.style.display="none";
      home.style.display="block";
      tv.style.display="none";
      movies.style.display="none";
      sports.style.display="none";
      categories.style.display="none";

  }
);



let four = document.getElementById("four");
four.addEventListener("click",
  function(){
      profile.style.display="none";
      search.style.display="none";
      home.style.display="none";
      tv.style.display="block";
      movies.style.display="none";
      sports.style.display="none";
      categories.style.display="none";

  }
);

let five = document.getElementById("five");
five.addEventListener("click",
  function(){
      profile.style.display="none";
      search.style.display="none";
      home.style.display="none";
      tv.style.display="none";
      movies.style.display="block";
      sports.style.display="none";
      categories.style.display="none";

  }
);



let six = document.getElementById("six");
six.addEventListener("click",
  function(){
      profile.style.display="none";
      search.style.display="none";
      home.style.display="none";
      tv.style.display="none";
      movies.style.display="none";
      sports.style.display="block";
      categories.style.display="none";

  }
);


let seven = document.getElementById("seven");
seven.addEventListener("click",
  function(){
      profile.style.display="none";
      search.style.display="none";
      home.style.display="none";
      tv.style.display="none";
      movies.style.display="none";
      sports.style.display="none";
      categories.style.display="block";

  }
);





