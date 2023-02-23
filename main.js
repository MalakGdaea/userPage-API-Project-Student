const apiManager = new APIManager();
const renderer = new Renderer();
const storage = new Storage();
renderer.renderDropDownList();
dataApdatedPromise = null;

$("#loadUsers").on("click", function () {
  dataApdatedPromise = apiManager.updateData();
});

$("#display").on("click", () => {
  dataApdatedPromise.then(() => {
    renderer.renderAllSections(apiManager.data);
  });
});

$("#saveUser").on("click", function () {
  storage.save(apiManager.data);
  renderer.renderDropDownList();
});

$("#dispaly-saved-user").on("click", function () {
  let chosenUser = $("select").val();
  let userData = JSON.parse(storage.getUserData(chosenUser));
  renderer.renderAllSections(userData);
});
