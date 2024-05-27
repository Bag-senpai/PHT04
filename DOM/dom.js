// access elements
// by className

const heading = document.getElementsByClassName("heading1");
console.log(heading);

// by tagName
const heading2 = document.getElementsByTagName("h2");
console.log(heading2);

// by querySelector
const list = document.querySelector("#list");
console.log(list);

const list2 = document.querySelectorAll("#list li");
console.log(list2);

// modifying elements
// innerHTML
heading[0].innerHTML = "<h6>Learning DOM Manipulation</h6>"; // you can include tags of HTML here

// textContent
heading2[0].textContent = "Element Manipulation"; // only text content

// setting attributes
heading[0].setAttribute("class", "highlight");

// changing style property
const button = document.querySelector("#btn");
button.style.backgroundColor = "skyblue";

// creating elements
const container = document.getElementsByClassName("container");
const newParagraph = document.createElement("p");
newParagraph.textContent = "HI!";
container[0].appendChild(newParagraph);

// remove an element
const elementToRemove = document.querySelector("li"); // only first li is removed
elementToRemove.remove();
console.log("Removed Element: ", elementToRemove);

var p = 4;

// handling events
button.addEventListener("click", addListItem);
function addListItem() {
    const newListItem = document.createElement("li");
    newListItem.textContent = "Item " + p++;
    document.getElementById("list").appendChild(newListItem);
}