/* Lorsque je clique sur un pokemon --> doit apparaitre : nom, image, type, stats

rechercher un pokemon via une searchbar, à la recherche du nom complet --> 
s'il existe --> afficher sa page (try)
sinon --> erreur (catch)

ajouter bouton favoris sur chacune des fiches --> liste paginer
--> ajouter un onglet avc tous les fav
--> retirer un favoris

afficher un message s'il y a une erreur dans l'api et ou si un pokemon n'existe pas 

*/
let next = document.getElementsByClassName("prevNext");
let best = document.getElementById("favorite");
let pokemon_list = document.getElementById("pokemonList");
let pokemon_result = document.getElementById("pokemonResult")


async function showPokemon(){
    let colonneContainer = document.createElement("div");
    const data = await searchPokemon();
    for(let i = 0; i < 20; i++){
        let colonneContainer = document.createElement("div");
        colonneContainer.innerHTML = 
        `<div class= "favorite"></div>
        <div class= "id">${data[i].id}</div>
        <div class= "image"><img src="${data[i].image}" alt="${data[i].name}"/></div>
        <div class= "name">${data[i].name}</div>
        <div class= "description">${data[i].apiTypes[0].name}</div>`;
        colonneContainer.className = "pokemonRow"
        pokemon_list.appendChild(colonneContainer);

        
    }
}

async function searchPokemon() {
    try {
        const res = await fetch("./pokemon.json");
        const json = await res.json();
        return json; // Retourner l'objet JSON directement
    } catch (error) {
        console.error("Erreur lors du chargement du fichier JSON", error);
    }
}
showPokemon();

// async function searchPokemon(e) {
//     e.preventDefault();
//     console.log('je suis ici');
//     try {
//         const data = await fetch(`https://pokebuildapi.fr/api/v1/pokemon`);
//         const jsonData = await data.json();
//         best.innerHTML = `<pre><code>${JSON.stringify(jsonData, null, 4)}</pre></code>`
//     } catch (error) {
//         console.log("error", error);
//     }
// }