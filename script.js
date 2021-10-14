fetch("https://ghibliapi.herokuapp.com/films")
.then((res)=>{
    return res.json()
})
.then((movies)=>{
    // console.log(movies);


let dropDown =document.querySelector("#dropdown");

for(let movie of movies){
    const option =document.createElement("option");
    option.setAttribute("value", movie.title)
    option.textContent = movie.title;
    dropDown.append(option);
}


dropDown.addEventListener("change", ()=>{
    for(let movie of movies){
        if(dropDown.value === movie.title){

        }
    }
})
})




















