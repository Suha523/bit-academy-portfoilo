const dataModel = new DataModel();
const renderer = new Renderer();
let saveCompany = $("#save-comany");

const saveComment = function () {
  const comment = $("#comment-input").val();
  console.log(comment);
  $.post("/comment", { coment: comment }, function (response) {});
};

$("#comment-subment").on("click", function () {
  dataModel.saveComment();
  $("#comment-input").val("");
});

const loadPage = function () {
  dataModel.getCommentFromDB().then(function () {
    renderer.renderComment(dataModel.comment);
  });
};

window.onload = function () {
  loadPage();
};

$("#messageSubmit").on("click", function () {
  dataModel.saveMessage();
});

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

$("#signin").on("click", function () {
  console.log("hi");
  dataModel.validate();
});
