class DataModel {
  constructor() {
    this.companies = [];
    this.comment = [];
    this.allComment = [];
  }

  saveComment() {
    const comment = $("#comment-input").val();
    $.post("/comment", { coment: comment }, function (response) {});
  }

  async getCommentFromDB() {
    let arrayComment = [];
    await $.get("/comments", function (comment) {
      console.log(comment);
      comment.forEach((c) =>
        arrayComment.push({
          comment: c.comment,
        })
      );
    });
    this.comment = arrayComment;
    console.log(this.comment);
  }

  async getAllComment() {
    let arrayComment = [];
    await $.get("/comment", function (comment) {
      comment.forEach((c) =>
        arrayComment.push({
          comment: c.comment,
        })
      );
    });
    this.allComment = arrayComment;
    console.log(this.allComment);
  }

  saveMessage() {
    let name = $("#nameinput").val();
    let email = $("#email").val();
    let message = $("#message").val();

    $.post(
      "/postcontact",
      { name: name, email: email, message: message },
      function (response) {}
    );
  }

  saveCompany = (company) => {
    $.post("/company", company, function (company) {
      console.log("Add new company ");
      console.log(company);
    });
  };
  getCompanies = () => {
    $.get("/companies", function (companies) {
      this.companies = companiess;
    });
  };
  updateCompany = (companyName) => {
    $.ajax({
      url: "/company/:" + companyName,
      type: "PUT",
      success: function (data) {
        $("#para").html(data);
      },
    });
  };
  deleteCompany = (companyName) => {
    $.ajax({
      url: "/company/:" + companyName,
      type: "DELETE",
      success: function (data) {
        console.log("delete company" + data.companyName);
      },
    });
  };
  validate() {
    let userName = $("#username").val();
    let password = $("#password").val();
    $.post(
      "/login",
      { userName: userName, password: password },
      function (err, result) {
        if (result) {
          //   window.location.assign("admin.html");
          console.log("hi from vvv");
          window.location = "admin.html";
        } else {
          console.log(err);
        }
      }
    );
  }
}
