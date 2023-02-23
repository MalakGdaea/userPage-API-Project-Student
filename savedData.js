class Storage {
  save(data) {
    let fullName = data.users[0].name.first + " " + data.users[0].name.last;
    localStorage[fullName] = JSON.stringify(data);
  }

  getUserData(fullName) {
    return localStorage[fullName];
  }
}
