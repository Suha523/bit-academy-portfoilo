const dataModel = new DataModel();
const renderer = new Renderer();
let saveCompany = $("#save-comany");
$("#comment-subment").on("click", function () {
  dataModel.saveComment();
  $("#comment-input").val("");
});

const loadComent = function () {
  dataModel.getCommentFromDB().then(function () {
    renderer.renderComment(dataModel.comment);
  });
};

loadComent();

$("#messageSubmit").on("click", function () {
  dataModel.saveMessage();
  $("#nameinput").empty();
  $("#email").empty();
  $("#message").empty();
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
  companyName = $("#companyName").val(" ");
  imageComapny = $("#imageComapny").val(" ");
  descriptionCompany = $("#descriptionCompany").val(" ");
  loadCompanies();
});

$("#signin").on("click", function () {
  console.log("hi");
  dataModel.validate();
});
//this section for admin settings
$(".setting-item").on("click", function (e) {
  e.preventDefault();
  let targetId = $(this).attr("id");
  $(".setting").removeClass("active-setting");
  $(`.${targetId}`).addClass("active-setting");
});

function loadCompanies() {
  let companiesPromise = dataModel.getCompanies();
  companiesPromise.then(function (companies) {
    renderer.renderCompany(companies);
  });
}
loadCompanies();
