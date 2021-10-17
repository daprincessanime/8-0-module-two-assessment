fetch("https://ghibliapi.herokuapp.com/films")
.then((res)=>{
    return res.json()
})
.then((movies)=>{
    console.log(movies);


let dropDown =document.querySelector("#dropdown");

for(let movie of movies){
    const option =document.createElement("option");
    option.setAttribute("value", movie.title)
    option.textContent = movie.title;
    dropDown.append(option);
}
 let selectedMovie;
const engTitle = document.querySelector("#movie-title");
const yearRelease = document.querySelector("#year-release");
const movieDescr =document.querySelector("#descriptions");
const posterMovie = document.querySelector("#poster-image")


dropDown.addEventListener("change", (e)=>{
    for(let movie of movies){
        if(e.target.value === movie.title){
            selectedMovie = movie;
            engTitle.textContent = movie.title;
            yearRelease.textContent = movie.release_date;
            movieDescr.textContent = movie.description;
            posterMovie.src = movie.image;
        }
    }
})
const yourRe = document.querySelector("#your-review")
const ulReview =document.querySelector("ul");

yourRe.addEventListener("submit", (event)=>{
event.preventDefault();

let myReview = document.createElement("li");
let reviewContent =document.querySelector("#written-review");
myReview.innerHTML = `<b>${selectedMovie.title}:<b> ${reviewContent.value}`;
ulReview.append(myReview);
reviewContent.value = "";
})
})



















