const apiManager = new APIManager();
const renderer = new Renderer();
const storage = new Storage();
dataApdatedPromise = null;

$("#loadUsers").on("click", function () {
  dataApdatedPromise = apiManager.updateData();
});

$("#display").on("click", () => {
  dataApdatedPromise.then(renderer.renderAllSections(apiManager.data));
});

$("#saveUser").on("click", function () {
  storage.save(apiManager.data);
});
