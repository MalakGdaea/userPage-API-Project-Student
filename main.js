const apiManager = new APIManager();
const renderer = new Renderer();

$("#loadUsers").on("click", function () {
  apiManager.updateData().then(() => {
    renderer.renderMainUser(apiManager.data.users[0]);
    renderer.renderQuete(apiManager.data.quote);
  });
});
