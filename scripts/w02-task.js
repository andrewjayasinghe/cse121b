/* W02-Task - Profile Home Page */



/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Andrew Jayasinghe'
let currentYear = new Date().getFullYear();
let profilePicture = 'images/profile.jpg';




/* Step 3 - Element Variables */


let nameElement = document.getElementById('name');
let foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');
let imageElement = document.getElementById("myImage");
/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

imageElement.src = profilePicture;
imageElement.alt = "profile image of Andrew Jayasinghe";

yearElement.textContent = currentYear;




/* Step 5 - Array */

let foodArray = ["Pizza","Fried Chicken","Rice","Noodles", "Curry"];
foodElement.innerHTML += `<br>${foodArray}`;

let faveFood = "Salad";
foodArray.push(faveFood);
foodElement.innerHTML += `<br>${foodArray}`;

foodArray.splice(0, 1);
foodElement.innerHTML += `<br>${foodArray}`;

foodArray.pop();
foodElement.innerHTML += `<br>${foodArray}`;


