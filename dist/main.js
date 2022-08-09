const dataModel = new DataModel();
const renderer = new Renderer();
const saveComment = function () {
  const comment = $("#comment-input").val();
  console.log(comment);
  $.post("/comment", { coment: comment }, function (response) {});
};
$("#comment-subment").on("click", function () {
  saveComment();
  $("#comment-input").val("");
});

$("#messageSubmit").on("click", function () {
  dataModel.saveMessage();
});

let saveCompany = $("#save-company");
let updateCompany = $("update-company");
let deleteCompany = $("#delete-company");
saveCompany.on("click", function (e) {
  e.preventDefault();
  let companyName = $("#companyName").val();
  let imageComapny = $("#imageComapny").val();
  let descriptionCompany = $("#descriptionCompany").val();
  dataModel.saveCompany({
    name: companyName,
    img: imageComapny,
    description: descriptionCompany,
  });
});
updateCompany.on("click", function () {});
