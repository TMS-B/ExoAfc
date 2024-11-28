/* Lorsque je clique sur un pokemon --> doit apparaitre : nom, image, type, stats

rechercher un pokemon via une searchbar, à la recherche du nom complet --> 
s'il existe --> afficher sa page (try)
sinon --> erreur (catch)

ajouter bouton favoris sur chacune des fiches --> liste paginer
--> ajouter un onglet avc tous les fav
--> retirer un favoris

afficher un message s'il y a une erreur dans l'api et ou si un pokemon n'existe pas 

*/


// let next = document.getElementsByClassName("prevNext");
// let best = document.getElementById("favorite");
// let pokemon_list = document.getElementById("pokemonList");
// let pokemon_result = document.getElementById("pokemonResult")
// let numbersOfItems = 20;
// let first = 0;

// function nextPage(){
//     first += numbersOfItems;
//     showPokemon();
// }

// async function showPokemon(){
//     let colonneContainer = document.createElement("div");
//     const data = await searchPokemon();
//     for(let i = first; i < first + numbersOfItems; i++){
//         next[i].addEventListener("click", nextPage)
//         let colonneContainer = document.createElement("div");
//         colonneContainer.innerHTML = 
//         `<div class= "favorite"></div>
//         <div class= "id">${data[i].id}</div>
//         <div class= "image"><img src="${data[i].image}" alt="${data[i].name}"/></div>
//         <div class= "name">${data[i].name}</div>
//         <div class= "description">${data[i].apiTypes[0].name}</div>`;
//         colonneContainer.className = "pokemonRow"
//         pokemon_list.appendChild(colonneContainer); 
//     }
// }

// async function searchPokemon() {
//     try {
//         const res = await fetch("./pokemon.json");
//         const json = await res.json();
//         return json; // Retourner l'objet JSON directement
//     } catch (error) {
//         console.error("Erreur lors du chargement du fichier JSON", error);
//     }
// }
// showPokemon();


let nextButton = document.getElementById("nextBtn");
let previousButton = document.getElementById("previousBtn")
let pokemon_list = document.getElementById("pokemonList");
let numbersOfItems = 20;
let firstDisplay = 0;
let lastDisplay = firstDisplay + numbersOfItems;
let pokemons;

nextButton.addEventListener('click', () =>{
    if (lastDisplay < pokemons.length){
        firstDisplay += numbersOfItems;
        lastDisplay += numbersOfItems;
        showPokemon(); 
    }else {
    } 
});
previousButton.addEventListener('click', () =>{
    if (firstDisplay != 0){
        firstDisplay -= numbersOfItems;
        lastDisplay -= numbersOfItems;
        showPokemon();
    }else {
    }
});

function showPokemon(){
    pokemon_list.innerHTML = '';
        for (let i = firstDisplay; i < lastDisplay; i++){
        let colonneContainer = document.createElement("div");
        colonneContainer.innerHTML = 
        `<div class="favorite">
            <img src="" alt="">
        </div>
        <div class="id">${pokemons[i].id}</div>
        <div class="image"><img src="${pokemons[i].image}" alt="${pokemons[i].name}"/></div>
        <div class="name">${pokemons[i].name}</div>
        <div class="description">${pokemons[i].apiTypes[0].name}</div>`;
        colonneContainer.className = "pokemonRow";
        pokemon_list.appendChild(colonneContainer);
    }
}
window.onload = async () => {
    await searchPokemon();
    console.log(pokemons);
    showPokemon();
  };
  
async function searchPokemon() {
    try {
        const res = await fetch("https://pokebuildapi.fr/api/v1/pokemon");
        const json = await res.json();
        pokemons = json;
    } catch (error) {
        console.error("Erreur lors du chargement du fichier JSON", error);
    }
}
