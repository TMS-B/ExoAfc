/* Lorsque je clique sur un pokemon --> doit apparaitre : nom, image, type, stats

rechercher un pokemon via une searchbar, à la recherche du nom complet --> 
s'il existe --> afficher sa page (try)
sinon --> erreur (catch)

ajouter bouton favoris sur chacune des fiches 
--> ajouter un onglet avc tous les fav
--> retirer un favoris

afficher un message s'il y a une erreur dans l'api et ou si un pokemon n'existe pas 

*/
let next = document.getElementsByClassName("prevNext");
let best = document.getElementById("favorite");
let pokemon_list = document.getElementById("pokemonList");
let pokemon_result = document.getElementById("pokemonResult")

const fighter = {
    
}

function searchPokemon() {
    fetch("./pokemon.json")
        .then (res => res.json())
        .then (json => console.log(JSON.stringify(json)))
        .catch ();
}
searchPokemon()

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