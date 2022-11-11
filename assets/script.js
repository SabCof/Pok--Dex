let button = document.getElementById('button');
let image = document.getElementById('image');
let pokeNumber = document.getElementById('nomber');
let pokeName = document.getElementById('name');
let pokeType = document.getElementById('type');

                    // async pour montrer que c'est asynchrone
const changePokemon = async( ) => {
    let randomNumber = Math.ceil(Math.random() * 150) +1;  //Variable pour tirer un numéro random, comme dans l'API il n'y a pas d'élement 0 donc on fait plus 1

    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;//URL API 
   // await pour attendre la promesse/ data récupère les données/ fetch est une promesse
    let data = await fetch(requestString);
    console.log(data);
    let response = await data.json();// attendre les données json
    console.log(response);
        //récupération des données
    image.src = response.sprites.front_default;
    pokeNumber.textContent =`#${response.id}` ;
    pokeName.textContent = response.name;
    pokeType.textContent = response.types[0].type.name;
};
changePokemon(); // déclaration de la fonction
button.addEventListener('click', changePokemon);// au clic du bouton on écoute la fonction changePokemon