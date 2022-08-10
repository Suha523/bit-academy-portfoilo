const dataModel = new DataModel();
const renderer = new Renderer();

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
