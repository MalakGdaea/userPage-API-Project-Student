class Renderer {
  renderMainUser(userData) {
    const user = {
      firstName: userData.name.first,
      lastName: userData.name.last,
      city: userData.location.city,
      state: userData.location.state,
      imgURL: userData.picture.large,
    };
    $(".user-container").empty();
    const source = $("#user").html();
    const template = Handlebars.compile(source);
    let newElements = template(user);
    $(".user-container").append(newElements);
  }

  renderQuete(quote) {
    $(".quote-container").empty();
    const source = $("#quote").html();
    const template = Handlebars.compile(source);
    let newElements = template(quote);
    $(".quote-container").append(newElements);
  }

  //   renderFriends (friendsData) {

  //   }
}
