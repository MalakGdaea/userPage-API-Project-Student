class Storage {
  save(data) {
    const user = this.getTheWantedUserData(data.users);
    let userObj = {
      user: [user], // the render is expecting an array of users
      aboutMe: data.AboutMe,
      pokemon: data.pokemon,
      quote: data.quote,
    };
    let fullName = user.firstName + " " + user.lastName;
    localStorage[fullName] = JSON.stringify(userObj);
  }

  getTheWantedUserData(users) {
    let userData = users[0];
    const user = {
      firstName: userData.name.first,
      lastName: userData.name.last,
      city: userData.location.city,
      state: userData.location.state,
      imgURL: userData.picture.large,
    };
    return user;
  }
}
