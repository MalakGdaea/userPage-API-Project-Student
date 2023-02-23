class Renderer {
  renderMainUser(userData) {
    const user = {
      firstName: userData.name.first,
      lastName: userData.name.last,
      city: userData.location.city,
      state: userData.location.state,
      imgURL: userData.picture.large,
    };
    this.addElements("#user", ".user-container", user);
  }

  renderQuete(quote) {
    this.addElements("#quote", ".quote-container", quote);
  }

  renderPokemon(pokemonInfo) {
    this.addElements("#pokemonInfo", ".pokemon-container", pokemonInfo);
  }

  renderAboutMe(aboutMe) {
    this.addElements("#about", ".meat-container", { aboutMe });
  }

  renderFriends(usersData) {
    let friends = [];
    for (let index = 1; index < usersData.length; index++) {
      let user = usersData[index];
      friends.push({ fullName: `${user.name.first} ${user.name.last}` });
    }
    this.addElements("#friends", ".friends-container", { friends });
  }

  renderDropDownList() {
    let friendsNames = [];
    for (let key in localStorage) {
      if (key === "length") {
        break;
      }
      friendsNames.push({ fullName: key });
    }
    this.addElements("#dropdown-list", "#saved-users", { friendsNames });
  }

  renderAllSections(data) {
    this.renderMainUser(data.users[0]);
    this.renderQuete(data.quote);
    this.renderPokemon(data.pokemon);
    this.renderAboutMe(data.AboutMe);
    this.renderFriends(data.users);
  }

  addElements(scriptID, elementIdentifier, dataToAdd) {
    $(elementIdentifier).empty();
    const source = $(scriptID).html();
    const template = Handlebars.compile(source);
    let newElements = template(dataToAdd);
    $(elementIdentifier).append(newElements);
  }
}
