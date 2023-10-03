/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Andrew Jayasinghe",
    photo: "images/profile.jpg",
    favoriteFoods: ["Pizza","Fried Chicken","Rice","Noodles","Curry","Salad"],
    hobbies: ["Gaming","Reading","Running"],
    placesLived: []
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Buffalo',
        length:'1 Year'
    }
);

myProfile.placesLived.push(
    {
        place: 'Seattle',
        length:'2 Year'
    }
);

myProfile.placesLived.push(
    {
        place: 'Tacoma',
        length:'4 Year'
    }
);


/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food=>{
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */

myProfile.hobbies.forEach(hobby=>{
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
})

/* Places Lived DataList */





myProfile.placesLived.forEach((location) => {
    console.log(` ${location.place}`);
    console.log(` ${location.length}`);

let dt = document.createElement('dt')
dt.textContent = location.place;
let dd = document.createElement('dd')
dd.textContent = location.length;
document.querySelector('#places-lived').appendChild(dt);
document.querySelector('#places-lived').appendChild(dd);

});



