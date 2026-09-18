async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase().trim();
        if (!pokemonName) {
            console.error("Please enter a Pokémon name.");
            return;
        }
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("Couldn't fetch the resource");
        }

        const data = await response.json();
        const spriteUrl = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        const titleElement = document.getElementById("pokemonTitle");
        const typesElement = document.getElementById("pokemonTypes");
        const cardElement = document.getElementById("pokemonCard");
        const typeOfPokemon = data.types.map(item => item.type.name);


        imgElement.src = spriteUrl;
        titleElement.textContent = data.name;
        typesElement.textContent = "Type: " + typeOfPokemon.join(', ');
        cardElement.style.display = "block";
    
        if (typeOfPokemon.includes("fire")) {
            cardElement.style.backgroundColor = "#F08030"; 
        } else if (typeOfPokemon.includes("water")) {
            cardElement.style.backgroundColor = "#6890F0"; 
         } else if (typeOfPokemon.includes("grass")) {  
            cardElement.style.backgroundColor = "#78C850"; 
        } else if (typeOfPokemon.includes("electric")) {
            cardElement.style.backgroundColor = "#F8D030"; 
        } else if (typeOfPokemon.includes("psychic")) {
            cardElement.style.backgroundColor = "#F85888"; 
        } else if (typeOfPokemon.includes("ice")) {
            cardElement.style.backgroundColor = "#98D8D8"; 
        } else if (typeOfPokemon.includes("dragon")) {
            cardElement.style.backgroundColor = "#7038F8"; 
        } else if (typeOfPokemon.includes("dark")) {
            cardElement.style.backgroundColor = "#705848"; 
        } else if (typeOfPokemon.includes("fairy")) {
            cardElement.style.backgroundColor = "#EE99AC"; 
        } else {
            cardElement.style.backgroundColor = "#e9e996"; 
        }

    }

    catch(error){
        console.error(error);
    }
}

