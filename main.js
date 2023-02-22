const apiManager = new APIManager();
const renderer = new Renderer();
dataApdatedPromise = null;

$("#loadUsers").on("click", function () {
  dataApdatedPromise = apiManager.updateData();
});

$("#display").on("click", () => {
  dataApdatedPromise.then(renderer.renderAllSections(apiManager.data));
});
