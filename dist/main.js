const dataModel = new DataModel();
const renderer = new Renderer();

$("#messageSubmit").on("click", function () {
  dataModel.saveMessage();
});
