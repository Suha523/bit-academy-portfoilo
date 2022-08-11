const renderer = new Renderer();
const programManager = new ProgramManager();

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

let saveCompany = $("#save-comany");
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

const renderPrograms = function () {
  let programPromise = programManager.getAllPrograms();
  programPromise.then(function (programs) {
    renderer.renderProgramsUsers(programs);
  });
};
renderPrograms();
$("#test").on("click", function () {
  let program = {
    name: "backend",
    price: 100,
    deadlineSubmit: new Date('2022-08-22'),
    startDate: new Date('2022-09-22'),
    endDate: new Date('2022-11-22'),
    description: "this is a fullstack training program",
    filters: [{EnglishLevel: "Intermediat"}]
  }
   let programPromise = programManager.addProgram(program)
   programPromise.then(function(){
      renderPrograms()
   })
});
