//This is the class that will manage all your APIs

class APIManager {
  constructor() {
    this.data = {};
  }

  getRandomUsers(numberOfUsers) {
    let url = `https://randomuser.me/api/?results=${numberOfUsers}`;
    return $.get(url).then((usersData) => {
      this.data["users"] = usersData.results;
    });
  }

  getRandomQuote() {
    const URL = "https://api.kanye.rest";
    return $.get(URL).then((quote) => {
      this.data.quote = quote; 
    });
  }

  getRandomPokemon() {
    const URL = "https://pokeapi.co/api/v2/pokemon";
    return $.get(URL).then((data) => {
      let numberOfPokemons = data.results.length;
      let randomNumber = Math.floor(Math.random() * numberOfPokemons);
      let pokemon = data.results[randomNumber];
      $.get(pokemon.url).then((pokemon) => {
        let pokemonImageURL = pokemon.sprites.front_default;
        this.data.pokemon = { name: pokemon.name, image: pokemonImageURL };
      });
    });
  }

  getRandomAboutMe = function () {
    const URL =
      "https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1";
    return $.get(URL).then((randomParagraph) => {
      this.data.AboutMe = randomParagraph[0];
    });
  };

  updateData = () => {
    return Promise.all([
      this.getRandomUsers(7),
      this.getRandomQuote(),
      this.getRandomPokemon(),
      this.getRandomAboutMe(),
    ]);
  };
}
