const fetch = require('node-fetch');
var now = require("performance-now")

const URL = "https://swapi.dev/api/people/"

const getPlanetforFirstSpeciesInFirstMovieForPerson = (id) => {
const url = URL + id + "/";
let myObject = {}
fetch(url)
.then((data) => data.json())
.then((character) => {
    myObject.name = character.name
    let movieURL = character.films[0]
    fetch(movieURL)
    .then((data) => data.json())
    .then((movie) => {
        myObject.title = movie.title
        let specieURL = movie.species[0]
        fetch(specieURL)
        .then((data) => data.json())
        .then((specie) => {

        myObject.first_specie = specie.name
        fetch(specie.homeworld).then(data => data.json())
        .then((homeworld) => {
            myObject.homeworld = homeworld.name
            console.log(myObject)
        })
        })
    })
})
}
//getPlanetforFirstSpeciesInFirstMovieForPerson(1)
const getPlanetforFirstSpeciesInFirstMovieForPersonAsync = async (id) => {
    var start = now()

    try {
        let character = await fetch(URL+ id).then(data => data.json())
        let film = await fetch(character.films[0]).then(data => data.json())
        let specie = await fetch(film.species[0]).then(res => res.json()) 
        let homeworld =  await fetch(specie.homeworld).then(res => res.json()) 
            
    } catch (error) {
    console.log("We have encountered an error!")
    console.log(error)      
    }
    var end = now()
    console.log(("Ran for: " + end - start + " ms").toFixed(2)) 
    return `Name: ${character.name}, Title: ${film.title}, Specie: ${specie.name}, Homeworld: ${homeworld.name}`
}

const testAsync = async() => {
    console.log(await getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1))
}
//testAsync()

//Sequential

const getCharactersSeq = async ()=>{
    let start = now();
    console.log("Starting Operations Sequential...")
    const char1 = await fetch(URL + 1 + "/").then(data=> data.json())
    const char2 = await fetch(URL + 2 + "/").then(data => data.json())    
    let end = now();
    console.log("Sequential Ran for [ms]: " + (end - start).toFixed(2));
    return `(SEQ) What came back? 1st: ${char1.name}, 2nd: ${char2.name}`
}
const testSeq = async() => {
    console.log(await getCharactersSeq())
}
testSeq()

//Parallel

const getCharactersParallel = async ()=>{
    let charArr = []
    let start = now();
    console.log("Starting Operations in Parallel...")
    const char1 =  fetch(URL + 1 + "/").then(data=> data.json())
    const char2 =  fetch(URL + 2 + "/").then(data => data.json())    
    charArr.push(char1,char2)
    
    const results = await Promise.all(charArr);
    let end = now();
    console.log("Parrallel Ran for [ms]: " + (end - start).toFixed(2));
    return "From Parallel: " + results.map(elem => elem.name);
}
const testParallel = async() => {
    console.log(await getCharactersParallel())
}
testParallel()
