class Renderer {
  renderMainUser = function (data) {
    let userData = data.users[0];
    const user = {
      firstName: userData.name.first,
      lastName: userData.name.last,
      city: userData.location.city,
      state: userData.location.state,
      imgURL: userData.picture.large,
    };
    const source = $("#user").html();
    const template = Handlebars.compile(source);
    let newElements = template(user);
    $(".user-container").append(newElements);
  };
}
