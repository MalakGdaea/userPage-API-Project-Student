const apiManager = new APIManager();
const renderer = new Renderer();

$("#loadUsers").on("click", function () {
  apiManager.updateData().then(() => { renderer.renderMainUser(apiManager.data)});
});
